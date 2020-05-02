import React from 'react';
import { Link } from 'react-router-dom'
import './header.styles.scss';
import { connect } from 'react-redux'
import { auth } from '../../firebase/firebase.utils'
import CartDropdown from '../cart-dropdown/cart-dropdown.component'
import CartIcon from '../cart-icon/cart-icon.component'
import {ReactComponent as Logo} from '../../assets/crown.svg'

const Header = ({ currentUser,hidden }) =>(
  
    <div className='header' >
        <Link className='logo-container' to='/'>
                <Logo className='logo'/>     
        </Link>
        <div className='options'>
            <Link className='option' to='/shop'>
             SHOP
            </Link>
            <Link className='option' to='/shop'>
                CONTACT 
            </Link>
            {
                currentUser ?(
                <div className='option' onClick={()=>auth.signOut()}>
                        SIGN OUT
                </div>)
                :
                (<Link className='option' to='/signin'>
                    SIGN IN
                </Link>)
            }
             <CartIcon />
        </div>
        { hidden ? null : <CartDropdown/>}
             
        
      
       
    </div>
    
)

const mapStateToProps = ({user:{currentUser},cart:{hidden}}) =>({
    currentUser,
    hidden
   
})



export default connect(mapStateToProps)(Header)

// export const Header = ({currentUser}) =>{
//     console.log(currentUser)
//     return <div className='header'>
//     <Link className='logo-container' to='/'>
//             <Logo className='logo'/>     
//     </Link>
//     <div className='options'>
//         <Link className='option' to='/shop'>
//          SHOP
//         </Link>
//         <Link className='option' to='/shop'>
//             CONTACT 
//         </Link>
//         {
//             currentUser ?(
//             <div className='option' onClick={()=>auth.signOut()}>
//                     SIGN OUT
//             </div>)
//             :
//             (<Link className='option' to='/signin'>
//                 SIGN IN
//             </Link>)
//         }
//     </div>
// </div>
// }

// export const Header = (props) =>{
//     console.log('this is',props.currentUser)
//     return <div className='header'>
    
// <h1>hello  </h1>
//     </div>

// }


