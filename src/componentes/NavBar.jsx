import React from 'react'
import "./style/Navbar.css"
import "./style/ModalForm.css"

const NavBar = ({ handleClickShowModal }) => {

     return (
    <nav className='navbar'>
      <h1 className='navbar__title'>Users CRUD</h1>
         <button className='modalForm__btn' onClick={handleClickShowModal}><i className='bx bx-cross'></i>Create New User</button>
     </nav>
  )
}

export default NavBar
