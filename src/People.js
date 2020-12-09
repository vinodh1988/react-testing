import React from 'react';
import './people.css';

class People extends React.Component{

    constructor(props){
        super(props);
        this.state={
            sno: undefined,
            name:"",
            city:""
        }
    } 
   
    render(){
        let code=   this.props.people.map(x=>{
            return(
                <tr key={x.sno}>
                          <td>{x.sno}</td>
                          <td>{x.name}</td>
                          <td>{x.city}</td>
                </tr>
            )
        })
        return(
    <div>
        <form>
            <table id="tabform">
                <tbody>
                <tr>
                    <td>sno</td>
                    <td><input type="text" value={this.state.sno} 
                    onChange={(e)=>{this.setState({sno:e.target.value})}}></input></td>
                </tr>
                <tr>
                    <td>Name</td>
                    <td><input type="text" value={this.state.name} 
                     onChange={(e)=>{this.setState({name:e.target.value})}}></input></td>
                </tr>
                <tr>
                    <td>city</td>
                    <td><input type="text" value={this.state.city} 
                     onChange={(e)=>{this.setState({city:e.target.value})}}></input></td>
                </tr>
                <tr>
                    <td colSpan="2" align="center">
                <input type="button" value="store" 
                onClick={()=>{this.props.storePerson(this.state)}} />
                            
                    </td>
                </tr>
                </tbody>
            </table>
        </form>

        <table id="report">
                  <thead>
                    <tr>
                     <th>Sno</th>
                     <th>name</th>
                     <th>city</th>
                     </tr>
                  </thead>
                  <tbody>
                      {code}
                  </tbody>
        </table>
        </div>
        );
    }
}

export default People;