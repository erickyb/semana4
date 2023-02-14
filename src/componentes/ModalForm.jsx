import React, { useEffect } from 'react'
import "./style/ModalForm.css"
import { useForm } from "react-hook-form"

const defaultValues = {
  first_name: "",
  last_name: "",
  email: "",
  password: "",
  birthday: "",
}
const ModalForm = ({
  isShowModal,
  handleClickShowModal,
  createUser,
  updatingUser,
  updateUser,
  setUpdatingUser,
}) => {
  
  const { register, handleSubmit, reset } = useForm() 
  
  const submit = (data) => {
    if(updatingUser) {
      updateUser(data, updatingUser.id);
    } else {
      createUser(data);
     }
   reset(defaultValues);

   };

  const handleClickClose = () => {
    handleClickShowModal()
    reset(defaultValues)
    setUpdatingUser()

  }

  useEffect(() => {
    if(updatingUser) {
      reset(updatingUser);
    }
  
  }, [updatingUser]);

  useEffect(() => {
  // es javacript 
    let inputs = document.getElementsByClassName('modalForm___input');
    
    for (let i = 0; i < inputs.length; i++) {
      inputs[i].addEventListener('keyup', function () {
        if (this.value.length >= 1) {
          this.nextElementSibling.classList.add('fijar');
        } else {
          this.nextElementSibling.classList.remove('fijar');
        }
      });

    }

    
  }, [])
  
    return (
      <section className={`modalForm ${isShowModal ? "activeForm" : ""}`}>
        <form onSubmit={handleSubmit(submit)} className='modalForm__Form' >
          <h3 className='modalForm__title'>{ updatingUser ? "Edit User":"New User"}</h3>
          <i onClick={handleClickClose} className='modalForm__x bx bx-x'></i>
        <div className='modalForm__div'>
          
            <input className='modalForm___input' type="text"{...register("first_name")} />
            <label className='modalForm_label' htmlFor=''>First Name</label>
          
            <input className='modalForm___input' type="text"{...register("last_name")} />
            <label className='modalForm_label' htmlFor=''>Last Name</label>
         
            <input className='modalForm___input' type="text"{...register("email")} />
            <label className='modalForm_label' htmlFor=''>Email</label>
         
            <input className='modalForm___input' type="password"{...register("password")} />
            <label className='modalForm_label' htmlFor=''>Password</label>
         
            <input className='modalForm__input' type="date"{...register("birthday")} />
            <label className='modalForm__label' htmlFor=''>Birthday</label>
          
        </div>
          <button className='modalForm__btn'>{updatingUser ? "Save Changes":"Add New" }</button>
      </form>
   </section>
  )
}

export default ModalForm