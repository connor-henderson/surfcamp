import { Route } from 'react-router-dom';

import LoginFormPage from './components/LoginFormPage/index';


function App() {
  return (
    <>
      <h1>Hello from App</h1>
      <Route path="/login">
        <LoginFormPage />
      </Route>
    </>
  );
}

export default App;
