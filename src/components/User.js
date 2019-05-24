import React from 'react'
import MediaCard from './Card';
import Button from '@material-ui/core/Button';

const User = (props) => {
  function returnHome() {
    props.history.push('/');
  }
  
  return (
    <div className = "card-container">
      <h1>Im a User</h1>
      <MediaCard />
      <br></br>
      <Button variant="contained" onClick={returnHome}>Home</Button>
    </div>
  )
}

export default User

