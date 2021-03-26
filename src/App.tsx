import React from 'react';
import {Column} from './Column';
import {AddNewItem} from './AddNewItem';
import {AppContainer} from './styles';
import {useAppState} from './AppStateContext';

const App = () => {

  const {state, dispatch} = useAppState();

  return (
    <AppContainer>
      {state.lists.map((list, index) => (
        <Column id={list.id} text={list.text} key={list.id} index={index} />
      ))}
      <AddNewItem 
        onAdd={text => dispatch({type: "ADD_LIST", payload: text})}   
        toggleButtonText={"+ Add another list"} 
      />
    </AppContainer>
  )
}

export default App;

