

export const messageReducer=(state={message:'React JS is for SPA'},action)=>{
       switch(action.type){
           case 'MESSAGE_ACTION':
                  return {message:action.data};

            default:
                  return state;
       }
}

export const developerReducer=(state={developers:['John']},action)=>{
    switch(action.type){
        case 'DEV_ACTION':
               return {developers: [...state.developers,action.data]};
         default:
               return state;
    }
}

export const  peopleReducer=(state={people:[]},action)=>{
      switch(action.type){
            case 'PEOPLE_ACTION':
                   return {people: action.data};
             default:
                   return state;
        }
     
}