import NoteItem from './NoteItem';

function NoteList({ notes, onDelete, onArchive }) {
  return (
    <div className="notes-list">
      {notes.length > 0 ? (
        notes.map((note) => <NoteItem key={note.id} id={note.id} title={note.title} body={note.body} createAt={note.createAt} onDelete={onDelete} archived={note.archive} onArchive={onArchive} />)
      ) : (
        <p class="no-record-text"> No Record</p>
      )}
    </div>
  );
}

export default NoteList;
