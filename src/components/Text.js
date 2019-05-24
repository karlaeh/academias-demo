import React from 'react'
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';

const Text = (props) => {
  const {
    title,
    subtitle,
    description
  } = props.text


  function returnBack() {
    props.history.goBack();
  }
  return (
    <div>
      <Paper>
        <h1>{title ? title : 'Title'}</h1>
        <h3>{subtitle ? subtitle : 'Subtitle'}</h3>
        <p>{description ? description : 'Description'}</p>
      </Paper>
      <Button variant="contained"  onClick={returnBack}>Back</Button>
    </div>
  )
}

export default Text
