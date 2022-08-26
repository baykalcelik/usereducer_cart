import './shoppingcart.css';

import Navbar from './Navbar';
import Cartcontainer from './Cartcontainer';


import { useContext } from 'react';
import {ShoppingContext} from './App';


export default function ShoppingCart(){

  const merkezveri = useContext(ShoppingContext);

    return(
    <div className="">

      <Navbar/>
      {merkezveri.toplamAdet > 0 ? <Cartcontainer/> : <div style={{width:"100vw", height:"100vh", backgroundColor:"white", display:"flex", alignItems:"center", justifyContent:"center"}}><h1> Sepet Boş ! </h1></div>}

    </div>
    )
}