import './navbar.css';
import { useContext } from 'react';
import {ShoppingContext} from './App';


export default function Navbar(){

  const merkezveri = useContext(ShoppingContext);


    return(
        <nav className='nav'>

        <p className='logoText'>
          UseReducer
        </p>

        <div className='lockSymbol'>

        <svg className='svg' xmlns='http://www.w3.org/2000/svg' fill="white" viewBox='0 0 20 20'>
              <path d='M16 6v2h2l2 12H0L2 8h2V6a6 6 0 1 1 12 0zm-2 0a4 4 0 1 0-8 0v2h8V6zM4 10v2h2v-2H4zm10 0v2h2v-2h-2z' />
        </svg>
        <span className='itemCountBadge'>
          {merkezveri.toplamAdet}
        </span>
        </div>

      </nav>
    )
}