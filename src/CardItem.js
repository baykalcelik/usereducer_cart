import './carditem.css';

import {FaChevronUp} from 'react-icons/fa';
import {FaChevronDown} from 'react-icons/fa';


export default function CardItem(props){


    return(
        <div className='ciCover'>

            <div className='left'>
                <img className="resim" src={props.img} alt="cart"/>
            </div>

            <div className='middle'>
                <p className='title'>{props.title}</p>
                <p className='price'>${props.price}</p>
                <button className='removeBtn' onClick={()=>{
                    props.siparisSil(props.id);
                }}>remove</button>
            </div>

            <div className='right'>
                <FaChevronUp className='yukari' onClick={()=>{
                        props.siparisAdetArttir(props.id);

                }} />

                <span className='amount'>{props.amount}</span>

                <FaChevronDown className='asagi' onClick={()=>{
                        props.siparisAdetAzalt(props.id);

                }}/>
                
            </div>

        </div>

    )

}