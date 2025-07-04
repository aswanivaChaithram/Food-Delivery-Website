import React from 'react'
import './Menu.css'
import { menu_list } from '../../assets/assets'

const Menu = ({category, setCategory}) => {

  return (
    <div className='menu' id='menu'>
        <h1>Explore our menu</h1>
        <p className='menu-text'>
            Choose from a divese menu featuring a delectable array of dishes.
            Our Satisfy your cravingd and elevate your dining experience, one 
            delicious meal at a time.
        </p>
        <div className="menu-list">
            {menu_list.map((item, index) => {
                return (
                    <div onClick={() => setCategory(prev => prev === item.menu_name ? "All" : item.menu_name)} key={index} className='menu-list-items'>
                        <img className={category === item.menu_name ? "active" : ""} src={item.menu_image} alt="" />
                        <p>{item.menu_name}</p>
                    </div>
                )
            })}
        </div>
        <hr />
    </div>
  )
}

export default Menu