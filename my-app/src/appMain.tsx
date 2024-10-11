import React,{ useEffect, useState, useContext } from 'react';
import logo from './logo.svg';
import './App.css';
// import { Label, Note } from "./types"; // Import the Label type from the appropriate module
import { dummyNotesList } from "./constants"; // Import the dummyNotesList from the appropriate module
import { Label, Note } from "./types"; // Import the Label type from the appropriate module
import { ToggleTheme } from './clickCounter';
import { ThemeContext } from './themeContext';

export function AppMain() {

  const [notes, setNotes] = useState(dummyNotesList); 
  const initialNote = {
     id: -1,
     title: "",
     content: "",
     label: Label.other,
   };
  const [createNote, setCreateNote] = useState(initialNote);

//   let favList = notes.filter(note => note.favorite === true);

  //like button
  const LikeButton = ( { currNote }: { currNote: Note }) => {
    const [like, setLikes] = useState(currNote.favorite);
    //toggle like when the button is clicked
    
    const handleLike = () => {
     setLikes(currNote.favorite = !currNote.favorite);
     setLikes(!like);
     RenderFavList();

    //   setLikes(currNote.favorite = !currNote.favorite);
    //   handleSetFav();
    }

    // useEffect(() => {   
    // //   favList = notes.filter(note => note.favorite === true);
    //     RenderFavList();
    //     console.log('useEffect called');
    // },[]);

    return (
      <div>
          <button onClick={handleLike}>{like ? '❤️' : '🤍'}</button>
      </div>
    );
  };

  const [favList,RenderFav] = useState(notes.filter(note => note.favorite === true));

  const RenderFavList = () => {
    RenderFav(notes.filter(note => note.favorite === true));

    // favList = notes.filter(note => note.favorite === true); 
    // [favList,updateFavlist] = useState(notes.filter(note => note.favorite === true);
  };


//   //update the list of favorite notes
//   const [favListNotes, setList] = useState(notes.filter(note => note.favorite === true));
//   const handleSetFav = () => {
//     setList(notes.filter(note => note.favorite === true))
//   };

  const theme = useContext(ThemeContext);

  return (
    <div      style={{
        background: theme.background,
        color: theme.foreground,
        padding: "20px",
      }}
      >
      <form className="note-form">
       <div><input placeholder="Note Title"></input></div>
       <div><textarea></textarea></div>
       <div><button type="submit">Create Note</button></div>
      </form>

      <div className="notes-grid" >
       {dummyNotesList.map((note) => (
         <div
           key={note.id}
           className="note-item" style={{ background: theme.background}}>
           <div className="notes-header"  >
             <LikeButton currNote={note} />
             <button>x</button>

           </div>
           <h2 style={{ color: theme.foreground}}> {note.title} </h2>
           <p style={{ color: theme.foreground}}> {note.content} </p>
           <p style={{ color: theme.foreground}}> {note.label} </p>
         </div>
       ))}
     </div>
     <div className="list-fav">
        <h2>List of favorites:</h2>
        {favList.map(note => (
          <h3>{note.title}</h3>))}
     </div>

     {/* <div>
     <h2>Toggle Theme</h2>
          <ToggleTheme />
     </div> */}
    </div>
  );
 }


