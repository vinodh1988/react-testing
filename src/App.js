import React from 'react';
import  {MessageRedux,ProgrammerRedux,PeopleRedux} from './Redux/mappings/mapping'
import './App.css';


const App=()=>{
  return(
      <div id="home">
            <PeopleRedux/>
            <MessageRedux/>
            <ProgrammerRedux/>
      </div>
  );
}

export default App;
