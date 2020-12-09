import React from 'react';

const MessageBox=({message,updateMessage})=>{
    console.log("Message Rendering...!!!");
    return(
        <div style={{backgroundColor:"lightgreen", 
        height:"300px",width:"600px",fontFamily:"Arial",padding: "10px",textAlign:"center", margin: "10px"}}>
             <h3>{message}</h3>
              <br/><br/>
             <button onClick={updateMessage}>Get New Message</button>
        </div>
    )
}


export default MessageBox;