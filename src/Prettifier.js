import React from 'react';

// parses the text from the textarea into pretty json, if it can
function parseValue(text) {
  try {
    return JSON.stringify(JSON.parse(text), null, 4);
  } catch (e) {
    return text;
  }
}

class Prettifier extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        json: ''
    };
  }
  
  onSubmit(e) {
    this.setState({
      json: parseValue(this.state.json)
    });
  }
  
  handleChange = (e) => {
    this.setState({
      json: e.target.value
    });
  }
    
  render() {
    return (
      <div className='prettifier'>
        <textarea value={this.state.json} onChange={(event) => this.handleChange(event)}/>
        <div className='button' onClick={(event) => this.onSubmit(event)}>Make pretty</div>
      </div>
    );
  }
}

export default Prettifier;
