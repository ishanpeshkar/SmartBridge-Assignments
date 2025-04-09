import React from 'react';
import TextUpdater from './components/TextUpdater';
import FormSubmit from './components/FormSubmit';
import UserCard from './components/UserCard';
import Button from './components/Button';
import LoginForm from './components/LoginForm';
import './App.css';

function App() {
  return (
    <div className="App">
      <TextUpdater />
      <FormSubmit />
      <UserCard name="John Doe" email="john.doe@example.com" />
      <Button />
      <LoginForm />
    </div>
  );
}

export default App;
