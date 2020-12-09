import Axios from 'axios';

export const peopleAction=(people)=>{
    
    return{
        type:"PEOPLE_ACTION",
        data:people
    }
}

export const peopleRead=()=>{
     return (dispatch)=>{
         Axios.get("http://ec2-3-16-166-243.us-east-2.compute.amazonaws.com:8896/api/people")
         .then(
     
         (response)=>dispatch(peopleAction(response.data)),
         ()=>dispatch(peopleAction([]))
         );
  }
}

export const peopleWrite=(person)=>{
    console.log(person);
    return (dispatch)=>{
Axios.post("http://ec2-3-16-166-243.us-east-2.compute.amazonaws.com:8896/api/people",person)
.then(
     
         (response)=>dispatch(peopleRead()),
         ()=>dispatch(peopleRead())
         );
    }
}