import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
// import { Link } from 'react-router';
import '@material-ui/core'
import logo from './assets/logo.png';
import CreateSurvey from './components/CreateSurvey'
import Surveys from './components/Surveys'
function App() {
  return (
    <div className="">
     <center><img src={logo}/></center>
      <div className="center mt-4">
     <Button className="btn btn-danger mt-4">Create Survey</Button>
      </div>
      <div className="center mt-4">
        <Button className = "btn btn-danger">Take survey</Button>
      </div>
      <CreateSurvey />
      <Surveys />
    </div>
  );
}

export default App;
