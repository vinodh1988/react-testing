import React,{createRef} from 'react';

class Programmers extends React.Component
{   
    constructor(props){
        super(props);
        this.programmer=createRef();
    }
   /* 
    static getDerivedStateFromProps(nextProps, prevState){
        console.log(nextProps);
        console.log(prevState);
        console.log("Received Props");
        return null;
    }

    shouldComponentUpdate(nextProps,nextState){
        console.log("Should component Update...???");
        console.log(nextProps);
        console.log(nextState);
        return true;
    }

    

    componentDidUpdate(prevProps, prevState, snapshot){
        console.log("Component updated");
        console.log(prevProps);
        console.log(prevState);
        console.log(snapshot);
    }
*/
    render(){
        console.log("Programmer rendering...!!!");
    let code=this.props.programmers.map((x)=><li key={x}>{x}</li>)
      return(
          <div>
              Add a programmer <input type="text" ref={this.programmer}/>
              <button onClick={()=>{this.props.addProgrammer(this.programmer.current.value);
            this.programmer.current.value="";}}>Add Programmer</button>
              <h3>Programmers</h3>
              <ul>
                  {code}
              </ul>

          </div>
      )
    }
}

export default Programmers;