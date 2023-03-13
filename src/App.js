import { useState } from "react";
import BookCreate from './components/BookCreate';
import BookList from './components/BookList';


function App() {
const [books,setBooks]=useState([])

const editBookById=(id,newTitle)=>{
const editBook=books.map((book)=> {
  if(book.id===id)
  {
    return {...book,title:newTitle};
  }
  return book
  
});

setBooks(editBook)
}
const deleteById=(id)=>
{
  const remove=books.filter((book)=>{
    return book.id!==id
  });
  setBooks(remove);
}

const random=Math.round(Math.random()*999)
const createBook=(title)=>{
  console.log("We need a itle:",title)
const updateBooks=[...books,{id:random,title}]

setBooks(updateBooks)
console.log(random)
}


  return (
    <div className="app">
          <h1> Reading List</h1>
    <BookList onEdit={editBookById} books={books} onDelete={deleteById}/>
<BookCreate onCreate={createBook} /> 


    </div>
  );
}

export default App;
