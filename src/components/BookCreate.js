import React from 'react'
import { useState } from 'react'
function BookCreate({onCreate}) {

  const [title,setTitle]=useState('')
const  handleChange=(event)=>{

  setTitle(event.target.value)
}
const handleSubmit=(event)=>
{
event.preventDefault()
onCreate(title)
setTitle('')
}

  return (
    <div className='book-create'>
      <h3>Add A Book</h3>
      <form action=""  onSubmit={handleSubmit}>
        <label htmlFor=""> Title</label> <br />
        <input className='input' value={title} onChange={handleChange} type="text"  placeholder='New Book'/> <br />
        <button className='button'> Create: </button>
      </form>
    </div>
  )
}

export default BookCreate
