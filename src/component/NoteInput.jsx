import React from 'react';

class NoteInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      body: '',
    };

    this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
    this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
  }

  onTitleChangeEventHandler(event) {
    this.setState({ title: event.target.value });
  }

  onBodyChangeEventHandler(event) {
    this.setState({ body: event.target.value });
  }

  onSubmitEventHandler(event) {
    event.preventDefault();
    this.props.addNote({
      title: this.state.title,
      body: this.state.body,
    });

    this.setState({
      title: '',
      body: '',
    });
  }

  render() {
    const maxBodyLength = 500;
    const maxTitleLength = 50;
    return (
      <form className="note-input" onSubmit={this.onSubmitEventHandler}>
        <input class="note-title" type="text" placeholder="Input Your Title" value={this.state.title} onChange={this.onTitleChangeEventHandler} maxLength={maxTitleLength} />
        <div className="character-count">
          {this.state.title.length}/{maxTitleLength} characters
        </div>
        
        <textarea class="note-body" type="text" placeholder="Input Your Note" value={this.state.body} onChange={this.onBodyChangeEventHandler} maxLength={maxBodyLength} />
        <div className="character-count">
          {this.state.body.length} / {maxBodyLength} characters
        </div>
        <button type="submit">Add Note</button>
      </form>
    );
  }
}

export default NoteInput;
