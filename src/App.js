import React, { useState, useEffect } from 'react';
import './App.css';
import NoteForm from './components/NoteForm';
import Note from './components/Note';
import ToggleSwitch from './components/ToggleSwitch';
import Navbar from './components/Navbar.js';
import Footer from './components/Footer.js';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [notes, setNotes] = useState([]);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Load notes from localStorage on component mount
    const savedNotes = JSON.parse(localStorage.getItem('notes')) || [];
    setNotes(savedNotes);
  }, []);

  useEffect(() => {
    // Save notes to localStorage whenever notes state changes
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

  const addNote = (title, content) => {
    const newNote = { id: Date.now(), title, content };
    setNotes([...notes, newNote]);
  };

  const deleteNote = (id) => {
    const updatedNotes = notes.filter(note => note.id !== id);
    setNotes(updatedNotes);
  };

  const editNote = (id, newTitle, newContent) => {
    const updatedNotes = notes.map(note =>
      note.id === id ? { ...note, title: newTitle, content: newContent } : note
    );
    setNotes(updatedNotes);
  };

  return (
    <span className="body">
    <Navbar/>
      <div className={`app ${darkMode ? 'dark-mode' : ''}`}>
      <div className="container">
      {/* <div className='App'> */}
        <ToggleSwitch darkMode={darkMode} setDarkMode={setDarkMode} />
        <h1 className="text-center mt-4 mb-4">My Notes</h1>
        <NoteForm addNote={addNote} />
        <div className="row mt-4">
          {notes.map(note => (
            <div className="col-md-4" key={note.id}>
              <Note
                note={note}
                deleteNote={deleteNote}
                editNote={editNote}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
    <Footer/>
    </span>
  );
}

export default App;