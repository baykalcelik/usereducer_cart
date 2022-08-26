import './App.css';
import data from './data.js';
import ShoppingCart from './ShoppingCart.js';

import { useContext, createContext,useReducer, useState, useEffect } from 'react';




export const ShoppingContext = createContext();

function App() {

  

const reducer = (state, action)=>{

  if(action.type === "secilensil"){
    console.log("silinecek eleman id : ", action.silinecekelemanid);
    console.log("kardeş silme girişiminden önce state : ", state);

    let temp = state.data.filter((item)=>{return item.id !== action.silinecekelemanid});
    console.log("silinmeden sonra state : ", temp);
    return {...state, data:temp};
    
  }else if(action.type === "adetarttir"){
    let temp = {...state};

    temp.data.forEach((item, index, array)=>{if(item.id === action.elemanid){item.amount += 1; }})
    return temp;

  }else if(action.type === "adetazalt"){
    let temp = {...state};
    temp.data.forEach((item, index, array)=>{if(item.id === action.elemanid){
      if(array[index].amount > 0) array[index].amount -= 1; 
    }})
    return temp;

  }else if(action.type === "hepsinisil"){

    return {yuklenmedurum:true, toplamFiyat:0, toplamAdet:0, data:null}

  }else if(action.type === "veri_yukle"){
    return {...state, data:data}
  }else if(action.type === "toplamadetbul"){
    let toplam = 0;
    for(let x of state.data){
      toplam += x.amount;
    }
    return {...state, toplamAdet:toplam}
  }else if(action.type === "toplamfiyatbul"){
    let toplam = 0;
    for(let x of state.data){
      toplam += x.amount * x.price;
    }
    // console.log("toplam fiiyat : ", toplam);
    return {...state, toplamFiyat:toplam}
  }else if(action.type === "yukleme_durum_degistir"){
    return {...state, yuklenmedurum:true}
  }


}

const toplamFiyatHesapla = ()=>{
  dispatch({type:"toplamfiyatbul"});
}

const toplamAdetHesapla = ()=>{
  dispatch({type:"toplamadetbul"});
}

  
const siparisSil = (id) => {
  console.log("dispatch içinden silinecek id : ", id);
  dispatch({type:"secilensil", silinecekelemanid:id});
  toplamAdetHesapla();
  toplamFiyatHesapla();
}

const siparisAdetArttir = (id) => {
  dispatch({type:"adetarttir", elemanid:id});
  toplamAdetHesapla();
  toplamFiyatHesapla();
}

const siparisAdetAzalt = (id) => {
  dispatch({type:"adetazalt", elemanid:id});
  toplamAdetHesapla();
  toplamFiyatHesapla();
}

const tamamenSil = ()=>{
  dispatch({type:"hepsinisil"});
}

const veriYukle = ()=>{
    dispatch({type:"veri_yukle", data} );
}

const yuklemeDurumDegistir = ()=>{
    dispatch({type:"yukleme_durum_degistir"} );
}






  const ilkdurum = {yuklenmedurum:false, toplamFiyat:0, toplamAdet:0, data:null}

  const [veri, dispatch] = useReducer(reducer, ilkdurum);


  useEffect(()=>{
    veriYukle();
    toplamAdetHesapla();
    toplamFiyatHesapla();
    yuklemeDurumDegistir();

  },[]);

  
  console.log(veri.toplamFiyat);

  return (
    <ShoppingContext.Provider value={{...veri, toplamFiyatHesapla, toplamAdetHesapla , siparisSil, siparisAdetArttir,  siparisAdetAzalt, tamamenSil}}>
      <div className='App'>

        {veri.yuklenmedurum ? <ShoppingCart /> : <div style={{width:"100vw", height:"100vh", backgroundColor:"white", display:"flex", alignItems:"center", justifyContent:"center"}}><h1>Yükleniyor ... </h1></div>}

      </div>
    </ShoppingContext.Provider>

    
  );
}

export default App;
