import React from 'react'
import '../styles/form.css'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { exportDefaultSpecifier } from '@babel/types';

class Form extends React.Component{
    state = 
      {
        title: '',
        subtitle: '',
        description: ''
      };

 //accede a los valores
  handleTyping = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  //guarda el texto en el estado
  handleSubmit= (event) => {
    event.preventDefault();
    this.props.handleText(this.state)
    this.props.history.push('/text')
  }

  render () {  
    const returnBack = () => {
    this.props.history.goBack();
    }
    
    return (
    <div className="format-input">
      <h1>Im a Form</h1>
      <form onSubmit={(event) => this.handleSubmit(event)}>
        <TextField type="text" name="title" label="Title" margin="normal" value={this.state.title} onChange={this.handleTyping} />
        <br></br>
        
        <TextField type="text" name="subtitle" label="Subtitle" margin="normal" value={this.state.subtitle} onChange={this.handleTyping} />
        <br></br>

        <TextField type="text" name="description" label="Description" margin="normal" variant="outlined" multiline rows="4" value={this.state.description} onChange={this.handleTyping} />
        <br></br>
        
       <span className="btn" >
        <Button className="btn-sub" variant="contained" type="submit" value="Submit" >Submit</Button>
        <Button className="btn-back" variant="contained" onClick={returnBack}>Back</Button>
       </span>
      </form>
    </div>
    );
  }
}

export default Form
