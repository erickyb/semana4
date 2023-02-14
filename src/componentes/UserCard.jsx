import React from 'react'
import "./style/ModalForm.css"
import "./style/UserCard.css"
const UserCard = ({ user, deleteUser, setUpdatingUser, handleClickShowModal }) => {

  const handleClickEdit = () => {
    setUpdatingUser(user)
    handleClickShowModal()
  }
  return (
    <div lassName='container'>
      <div className='usercard'>
          <div className='usercard__name'>
              <h3>{user.first_name} {user.last_name}</h3>
              </div>
              <hr />
          <div className='usercard__data'>
              <ul className='usercard__ul'>
            <li className='usercard__li'><span className='usercard__span'>CORREO:<br/> </span>{user.email}</li>
            <li className='usercard__li'><span className='usercard__span'>CUMPLEAÑOS: <br /></span> <i className='bx bx-gift'></i>{user.birthday}</li>
              </ul>
          </div>
          {/* <hr /> */}
          <div >
          <footer className='usercard__btn'>
            <button className='modalForm__btn' onClick={() => deleteUser(user.id)}><i className='bx bx-trash'></i></button>
            <button className='modalForm__btn' onClick={handleClickEdit}><i className='bx bx-pencil'></i></button>
          </footer>
            </div>
      </div>
</div>
  )
}

export default UserCard
