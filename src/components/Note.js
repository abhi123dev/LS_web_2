import React, { useState } from 'react';

function Note({ note, deleteNote, editNote }) {
  const [editing, setEditing] = useState(false);
  const [title, setTitle] = useState(note.title);
  const [content, setContent] = useState(note.content);

  const handleDelete = () => {
    alert(" You are deleting your note")
    deleteNote(note.id);
  };

  const handleEdit = () => {
    setEditing(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() && content.trim()) {
      editNote(note.id, title, content);
      setEditing(false);
    }
  };

  return (
    <div className="card mb-5" >
      <div className="card-body"style={{backgroundColor:"#fff7ca",
        borderColor:"#93eef587"
      }}>
        {editing ? (
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                // required
              />
            </div>
            <div className="form-group">
              <textarea
                className="form-control"
                style={{backgroundColor:"#0043ff3d"}}
                value={content}
                onChange={(e) => setContent(e.target.value)}
                // required
              />
            </div>
            <button type="submit" className="btn btn-outline-success mr-2">Save</button>
            <button type="button" className="btn btn-outline-secondary" onClick={() => setEditing(false)}>Cancel</button>
          </form>
        ) : (
          <>
            <h5 className="card-title">{note.title}</h5>
            <p className="card-text">{note.content}</p>
            <button className="btn btn-outline-danger mr-2" onClick={handleDelete}>Delete</button>
            <button className="btn btn-outline-primary mx-2" onClick={handleEdit}>Edit</button>
          </>
        )}
      </div>
    </div>
  );
}

export default Note;
