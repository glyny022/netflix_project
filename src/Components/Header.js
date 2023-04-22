import "../Components/Header.css"

import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import SearchIcon from '@mui/icons-material/Search';
import React from "react"; 

function Header() {
  
  return (
    
    <div className="header">
        
        <img
          className="header_logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt=""
        />

      <div className="header_search">
        <input className="header_searchInput" type="text"  />
        <SearchIcon className="header_searchIcon"></SearchIcon>
      </div>

      <div className="header_nav">

          <div className="header_option">

              <span className="header_optionLineOne">Hello Guest</span>
              <span className="header_optionLineTwo">Sign In</span>
          </div>  

          <div className="header_option">
            <span className="header_optionLineOne">Returns</span>
            <span className="header_optionLineTwo">& Orders</span>
          </div>

          <div className="header_option">

              <span className="header_optionLineOne">Your</span>
              <span className="header_optionLineTwo">Prime</span>
          </div> 

        
           <div className="header_optionBasket">
            <AddShoppingCartIcon />  
            <span className="header_optionLineTwo header__basketCount">
            
            </span>
           </div>
          
      </div>
    </div>  
    
  );
}
export default Header;

// function Header() {  
//     return (
//       <div className="header">
        
//           <img
//             className="header__logo"
//             src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt=""
//           />
        
  
//         <div className="header__search">
//           <input className="header__searchInput" type="text" />
//           <SearchIcon className="header__searchIcon" />
//         </div>
  
//         <div className="header__nav">
          
//             <div className="header__option">
//               <span className="header__optionLineOne">Hello Guest</span>
//               <span className="header__optionLineTwo">Sign In</span>
//             </div>
          
  
          
//             <div className="header__option">
//               <span className="header__optionLineOne">Returns</span>
//               <span className="header__optionLineTwo">& Orders</span>
//             </div>
          
          
  
//           <div className="header__option">
//             <span className="header__optionLineOne">Your</span>
//             <span className="header__optionLineTwo">Prime</span>
//           </div>
  
          
//             <div className="header__optionBasket">
//               <ShoppingBasketIcon/>
//               <span className="header__optionLineTwo header__basketCount">
//                 0
//               </span>
//             </div>
          
//         </div>
//       </div>
//     );
//   }
  
//   export default Header;