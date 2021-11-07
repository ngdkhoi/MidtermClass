import Signup from "./components/authentication/registerForm";
import Login from "./components/authentication/loginForm";
import { Routes, Route, Link, Redirect, useRoutes } from 'react-router-dom';

function App() {

  const element = useRoutes([
    {
      path: '/',
      element: <Login />
    },
    {
      path: '/register',
      element: <Signup />
    }
  ])

  return element
}

export default App;
