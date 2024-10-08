import React,{ useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
// import { Label, Note } from "./types"; // Import the Label type from the appropriate module
import { dummyNotesList } from "./constants"; // Import the dummyNotesList from the appropriate module
import { Label, Note } from "./types"; // Import the Label type from the appropriate module

function App() {

  const [notes, setNotes] = useState(dummyNotesList); 
  const initialNote = {
     id: -1,
     title: "",
     content: "",
     label: Label.other,
   };
  const [createNote, setCreateNote] = useState(initialNote);



  //like button
  const LikeButton = ( { currNote }: { currNote: Note }) => {
    
    const [like, setLikes] = useState(currNote.favorite);

    //toggle like when the button is clicked
    const handleLike = () => {
      setLikes(currNote.favorite = !currNote.favorite);
      handleSetFav();
    }

    return (
      <div>
          <button onClick={handleLike}>{like ? '❤️' : '🤍'}</button>
      </div>
    );
  };

  const [favListNotes, setList] = useState(notes.filter(note => note.favorite === true));
  
  const handleSetFav = () => {
    setList(notes.filter(note => note.favorite === true))
  };

  return (
    <div className='app-container'>
      <form className="note-form">
       <div><input placeholder="Note Title"></input></div>
       <div><textarea></textarea></div>
       <div><button type="submit">Create Note</button></div>
      </form>

      <div className="notes-grid">
       {dummyNotesList.map((note) => (
         <div
           key={note.id}
           className="note-item">
           <div className="notes-header">
             <LikeButton currNote={note} />
             <button>x</button>

           </div>
           <h2> {note.title} </h2>
           <p> {note.content} </p>
           <p> {note.label} </p>
         </div>
       ))}
     </div>
     <div className="list-fav">
      <h2>List of favorites:</h2>
        {favListNotes.map(note => (
          <h3>{note.title}</h3>))}
     </div>

    </div>

  );
 }

export default App;