import React from 'react';

function NoteItemBody({ title, body, createAt }) {
  return (
    <div className="note-item__content">
      <h2 className="note-item__title">{title}</h2>
      <h5 className="note-item__createAt">{createAt}</h5>
      <p className="note-item__body">{body}</p>
    </div>
  );
}

export default NoteItemBody;
