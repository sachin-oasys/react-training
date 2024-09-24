import React from 'react';
import logo from './logo.svg';
import './App.css';
import UserTable from './components/users/UserTable';
import { UserData } from './components/users/UserData';


function App() {
  return (
   <UserTable users={UserData}></UserTable>
  );
}

export default App;
