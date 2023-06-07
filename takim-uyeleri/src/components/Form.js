import React from 'react'
import "./Form.css"

const Form = ({handlerSubmit, changeHandler,uye}) => {
  return (
    <form action="" onSubmit={handlerSubmit}>
        <div>
        <div className='formElement'>
            <label htmlFor="name">name</label>
            <input type="text" value={uye.firstname} name="firstname" id="name" onChange={changeHandler} />
        </div>
        <div className='formElement'>
            <label htmlFor="surname">surname</label>
            <input type="text" value={uye.surname} name="surname" id="surname" onChange={changeHandler} />
        </div>
        <div className='formElement'>
            <label htmlFor="email">email</label>
            <input type="email" value={uye.email} name="email" id="email" onChange={changeHandler} />
        </div>
        <div className='formElement'>
            <label htmlFor="old">old</label>
            <input type="number" value={uye.old} name="old" id="old" onChange={changeHandler} />
        </div>
        <div className='formElement'>
            <button type='submit'>Ekle</button>
        </div>
    </div>
    </form>
    
  )
}

export default Form