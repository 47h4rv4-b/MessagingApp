import React from 'react';
//import logo from './logo.svg';
//import './App.css';
import Login from './Login'
import useLocalStorage from '../hooks/useLocalStorage'
import Dashboard from './Dashboard'
import { ContactsProvider } from '../contexts/ContactsProvider';
import { ConversationsProvider} from '../contexts/ConversationsProvider' 

function App() {
    
  const [id, setId] = useLocalStorage('id')

  const dashboard = (
    <ContactsProvider>
      <ConversationsProvider> 
        <Dashboard id={id}/>
      </ConversationsProvider>
    </ContactsProvider>
  )

  return (
    <React.Fragment> 
      Unique ID : 
      {id ? dashboard : <Login onIdSubmit={setId} />}
      
    </React.Fragment>
  )   
  }

export default App;
