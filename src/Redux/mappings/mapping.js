import {combineReducers,bindActionCreators} from 'redux';
import  {developerReducer,messageReducer,peopleReducer} from '../reducers/messageReducer';
import {connect} from 'react-redux';
import {MessageAction} from '../actions/messageAction';
import {addDeveloper} from '../actions/programmerAction';
import {peopleWrite} from '../actions/peopleAction';

import  MessageBox from '../../MessageBox';
import  Programmers from '../../Programmers';
import People from '../../People';

export const state=combineReducers({
    messages:messageReducer,
    developersData: developerReducer,
    peopleData: peopleReducer
})

const mapStoreToPropsMessage=(state)=>{
    return {message: state.messages.message}
}

const mapActionToPropsMessage=(dispatch)=>{
    return bindActionCreators({updateMessage:MessageAction},dispatch);
}

//Programmer mapping
const mapStoreToPropsProgrammers=(state)=>{
    return {programmers: state.developersData.developers}
}

const mapActionToPropsProgrammer=(dispatch)=>{
    return bindActionCreators({addProgrammer:addDeveloper},dispatch);
}

//People Mapping
const mapStoreToPropsPeople=(state)=>{
    return {people: state.peopleData.people}
}

const mapActionToPropsPeople=(dispatch)=>{
    return bindActionCreators({storePerson:peopleWrite},dispatch);
}


export const MessageRedux=connect(mapStoreToPropsMessage,mapActionToPropsMessage)(MessageBox);
export const ProgrammerRedux=connect(mapStoreToPropsProgrammers,mapActionToPropsProgrammer)(Programmers)
export const PeopleRedux=connect(mapStoreToPropsPeople,mapActionToPropsPeople)(People)


