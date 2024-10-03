import NoteList from './NoteList';
import { getDataNote } from '../utils/data';
import NoteInput from './NoteInput';
import React from 'react';
class NoteApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: getDataNote(),
      searchQuery: '',
    };
    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
    this.onSearchHandler = this.onSearchHandler.bind(this);
    this.onArchiveHandler = this.onArchiveHandler.bind(this);
  }
  onDeleteHandler(id) {
    const notes = this.state.notes.filter((note) => note.id !== id);
    this.setState({ notes });
  }

  onAddNoteHandler({ title, body }) {
    const date = new Date();
    const formatedate = date.toLocaleDateString('id-ID', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
    });
    this.setState((prevState) => {
      return {
        notes: [
          ...prevState.notes,
          {
            id: +new Date(),
            title,
            body,
            createAt: formatedate,
          },
        ],
      };
    });
  }
  onSearchHandler(event) {
    this.setState({ searchQuery: event.target.value });
  }

  onArchiveHandler(id) {
    const notes = this.state.notes.map((note) => {
      if (note.id === id) {
        return { ...note, archive: !note.archive };
      }
      return note;
    });
    this.setState({ notes });
  }
  render() {
    const filteredNotes = this.state.notes.filter((note) => note.title.toLowerCase().includes(this.state.searchQuery.toLowerCase()) || note.body.toLowerCase().includes(this.state.searchQuery.toLowerCase()));
    const activeNotes = filteredNotes.filter((note) => !note.archive);
    const archivedNotes = filteredNotes.filter((note) => note.archive);
    return (
      <div className="note-app">
        <h1>Application Personal Note</h1>
        <h2>Add Note</h2>
        <NoteInput addNote={this.onAddNoteHandler} />

        <h1>List Note</h1>
        <input className="search-query" type="text" placeholder="Search Your Note..." value={this.state.searchQuery} onChange={this.onSearchHandler} />
        <NoteList notes={activeNotes} onDelete={this.onDeleteHandler} onArchive={this.onArchiveHandler} />
        <h1>Archive</h1>
        <NoteList notes={archivedNotes} onDelete={this.onDeleteHandler} onArchive={this.onArchiveHandler} />
      </div>
    );
  }
}

export default NoteApp;
