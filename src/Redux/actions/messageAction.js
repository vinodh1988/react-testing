
 export const MessageAction=()=>{
      let messages=["React JS is  componenent based","Redux makes react better",
    "Redux is common library","React has states and props","Angular is also component based"];

    return{
        type: "MESSAGE_ACTION",
        data: messages[2]
    }
 }