import React from 'react';
import DeleteButton from './DeleteButton';
import ArchiveButton from './ArchiveButton';

function NoteItem({ title, createAt, body, id, onDelete, onArchive, archived }) {
  return (
    <div className="note-item">
      <div className="note-item__body">
        <h2>{title}</h2>
        <p>{createAt}</p>
        <h5>{body}</h5>
      </div>
      <div className="note-item__buttons">
        <DeleteButton id={id} onDelete={onDelete} />
        <ArchiveButton id={id} onArchive={onArchive} archived={archived} />
      </div>
    </div>
  );
}
export default NoteItem;
