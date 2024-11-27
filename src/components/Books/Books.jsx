import { useEffect, useState } from "react";
import Book from "../Book/Book";


const Books = () => {
    const [books,setbooks]=useState([])
    useEffect( ()=>{

        fetch ('./booksData.json')
        .then(res=>res.json())
        .then (data=> setbooks(data));
    },[])
    return (
        <div className="py-10">
        <h1 className="text-4xl font-bold text-center">Books</h1>
     <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-col-1 gap-8">
     {
        books.map( book =><Book book={book} key={book.bookId}></Book>)
      }
     </div>
            
        </div>
    );
};

export default Books;