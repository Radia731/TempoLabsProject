import './Menu.css';

function Menu() {
  return (
    <div className="menu">
        <div className="menu-name">

        <p> SHOP.CO</p>

        </div>

        <ul className="menu-bar">
            <li>Shop </li>
            <li>On Sale </li>
            <li>New Arrivals </li>
            <li>Brand </li>

        </ul>

   <div className="search-barbg"> 
       <i class="fa-solid fa-magnifying-glass"></i>
        <input type="text" 
        placeholder="Search your product"/>
   </div>
    
    <div className="user-logo">
            <i class="fa-solid fa-cart-shopping"></i>
            <i class="fa-regular fa-user"></i>
    </div>
    </div>
  )
  }
export default Menu;