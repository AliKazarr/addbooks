import React from 'react'
import { useState } from 'react'
function BookEdit({book,onSubmit}) {
 
  const [title,setTitle]=useState(book.title)

  const handleChange=(event)=>{

    setTitle(event.target.value)
  }
  const handleSubmit=(event)=>{
event.preventDefault()
   onSubmit(book.id ,title)
  }
  return (
    <div>
  <form action=""  className='book-edit' onSubmit={handleSubmit }>
        <label htmlFor=""> Title</label> <br />
        <input className='input'  value={title} onChange={handleChange} type="text"  placeholder='New Book'/> <br />
        <button className='button'> Save: </button>
      </form>
    </div>
  )
}

export default BookEdit
