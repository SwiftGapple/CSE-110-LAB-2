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
     favorite: false,
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


  const createNoteHandler = (event: React.FormEvent) => {
    event.preventDefault();
    console.log("title: ", createNote.title);
    console.log("content: ", createNote.content);
    createNote.id = notes.length + 1;
    setNotes([createNote, ...notes]);
    setCreateNote(initialNote);
  };

//   //update the list of favorite notes
//   const [favListNotes, setList] = useState(notes.filter(note => note.favorite === true));
//   const handleSetFav = () => {
//     setList(notes.filter(note => note.favorite === true))
//   };

  const theme = useContext(ThemeContext);

  return (
	<div className='app-container' style={{
        background: theme.background,
        color: theme.foreground,
        padding: "20px",
      }}
>
  	<form className="note-form" onSubmit={createNoteHandler}>
    	<div>
      	<input
        	placeholder="Note Title"
        	onChange={(event) =>
          	setCreateNote({ ...createNote, title: event.target.value })}
        	required>
      	</input>
    	</div>

    	<div>
      	<textarea
        	onChange={(event) =>
          	setCreateNote({ ...createNote, content: event.target.value })}
        	required>
      	</textarea>
    	</div>

  <div>
     	<select
       	onChange={(event) =>
         	setCreateNote({ ...createNote, label: event.target.value as Label })}
       	required>
       	<option value={Label.personal}>Personal</option>
       	<option value={Label.study}>Study</option>
       	<option value={Label.work}>Work</option>
       	<option value={Label.other}>Other</option>
     	</select>
   	</div>

    	<div><button type="submit">Create Note</button></div>
  	</form>

  	<div className="notes-grid">
    	{notes.map((note) => (
      	<div
        	key={note.id}
        	className="note-item" style={{ background: theme.background}}
      	>
        	<div className="notes-header">
            <LikeButton currNote={note} />
          	<button>x</button>

        	</div>
            <h2 style={{ color: theme.foreground}}> {note.title} </h2>
            <p style={{ color: theme.foreground}}> {note.content} </p>
            <p style={{ color: theme.foreground}}> {note.label} </p>
      	</div>
    	))}
        <div className="list-fav">
            <h2>List of favorites:</h2>
        {favList.map(note => (
          <h3>{note.title}</h3>))}
        </div>
  	</div>
	</div>  );
 }