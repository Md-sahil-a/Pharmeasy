import './App.css';
import Nav from './components/homecomponents/nav';
import Home from './components/homecomponents/home';
import Sign from './components/auth/complete-auth';
import { Route, Routes }from 'react-router-dom';
function App() {
  return (
    <>
    <Routes>
      <Route path='/' element= {<Nav/>}>
        <Route index element={<Home/>} />
        <Route path='sign-in' element={<Sign/>}/>
      </Route>
    </Routes>
    
    </>
  );
}

export default App;