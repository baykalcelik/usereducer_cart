import './cartcontainer.css';
import CardItem from './CardItem';
import { useContext } from 'react';
import {ShoppingContext} from './App';

export default function Cartcontainer(){

    const merkezveri = useContext(ShoppingContext);

    return(
        <div className='ccCover'>
            <p className='ccHeader'>Your Bag</p>

            <div className='cardList'>
                {merkezveri.data.map((item, index)=>{
                    return <CardItem key={index} title={item.title} price={item.price} img={item.img} amount={item.amount} id={item.id}  siparisSil={merkezveri.siparisSil}  toplamFiyatHesapla={merkezveri.toplamFiyatHesapla}  toplamAdetHesapla={merkezveri.toplamAdetHesapla}  siparisAdetArttir={merkezveri.siparisAdetArttir}  siparisAdetAzalt={merkezveri.siparisAdetAzalt} />
                })}
            </div>
            
            <div className='clFooter'>
                <div className='totalLine'>
                    <p className='footerText'>Total : </p>
                    <p className='totalPrice'>${merkezveri.toplamFiyat}</p>
                </div>
                <button className='clearCartBtn' onClick={merkezveri.tamamenSil}>CLEAR CART</button>

            </div>


        </div>

    )

}