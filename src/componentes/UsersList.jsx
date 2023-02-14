import React from 'react'
import UserCard from './UserCard'
import "./style/UsersList.css"

const UsersList = ({ users, deleteUser, setUpdatingUser,handleClickShowModal }) => {
  return (
    <section className='UsersList__container'>
      {users.map((user) => (
        <UserCard
          key={user.id}
          user={user}
          deleteUser={deleteUser}
          setUpdatingUser={setUpdatingUser}
          handleClickShowModal={handleClickShowModal}
        />))
      }
      
     
          </section>
  )
}

export default UsersList
