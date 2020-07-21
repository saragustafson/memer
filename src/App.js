import React, {useState} from 'react';
import './App.css';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

function App() {
  const [text,setText] = useState('')
  return (
    <div className="App">
      <div className= "searchBar"> 
        <TextField id="outlined-basic" label="Search" 
          variant="outlined" color="Primary"
          placeholder="Let's get memey" value={text}
          onChange={e=> setText(e.target.value)} />

        <Button variant="contained" color="primary"
        disabled={!text}>
          Search
        </Button>

      </div>

    </div>
  )
}

export default App
