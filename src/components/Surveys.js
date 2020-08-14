import React, { useState } from 'react';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';
import Icon from '@material-ui/core/Icon';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
  },
  button: {
    margin: theme.spacing(1),
  }
}))

function App() {
  const classes = useStyles()
  const [inputFields, setInputFields] = useState([
        
      { option: '  '},
 
  ]);
  const [question ,setQuestion] = useState([
      {questions: " "}
  ])


  const handleSubmitQuestion = () => {
    setQuestion( [...question,{questions:' '}])
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("InputFields", inputFields);
  };

  const handleChangeInput = (index, event) => {
    const values = [...inputFields];
    values[index][event.target.name] = event.target.value;
    setInputFields(values);
  }

  const handleAddFields = () => {
    setInputFields([...inputFields, {option: ' '}])
  }

  const handleRemoveFields = (index) => {
    const values  = [...inputFields];
    values.splice(index, 1);
    setInputFields(values);
  }

  return (
    <Container className={classes.root}>
      <h1>Add New Question</h1>
      <form className={classes.root} onSubmit={handleSubmit}>
      <div><TextField></TextField></div>
        { inputFields.map((inputField, index) => (
            
          <div key={index}>
        
            <TextField 
              name="option"
              label="option"
              variant="filled"
              value={inputField.option}
              onChange={event => handleChangeInput(index, event)}
            />
            {/* <TextField 
              name="lastName"
              label="Last Name"
              variant="filled"
              value={inputField.lastName}
              onChange={event => handleChangeInput(index, event)}
            /> */}
            <IconButton
              onClick={() => handleRemoveFields(index)}
            >
              <RemoveIcon />
            </IconButton>
            <IconButton
              onClick={() => handleAddFields()}
            >
              <AddIcon />
            </IconButton>
          </div>
        )) }
        <Button
          className={classes.button}
          variant="contained" 
          color="primary" 
          type="submit" 
          endIcon={<Icon>send</Icon>}
          onClick={handleSubmit}
        >Send</Button>
        <Button
          className={classes.button}
          variant="contained" 
          color="secondary" 
          type="submit" 
          endIcon={<Icon>send</Icon>}
          onClick={()=> handleSubmitQuestion()}
        >Add Question</Button>
      </form>
    </Container>
  );
}

export default App;
