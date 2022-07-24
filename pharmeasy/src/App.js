import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from './components/homecomponents/nav';
import Home from './components/homecomponents/home';
import Sign from './components/auth/complete-auth';
import { Route, Routes }from 'react-router-dom';
import Order from './components/order/medicine';
import Lab from './components/labtest';
function App() {
  return (
    <>
    <Routes>
      <Route path='/' element= {<Nav/>}>
        <Route index element={<Home/>} />
        <Route path='sign-in' element={<Sign/>}/>
        <Route path='order' element = {<Order/>}/>
        <Route path='lab' element = {<Lab/>}/>
      </Route>
    </Routes>
    
    </>
  );
}

export default App;