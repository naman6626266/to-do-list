import { Routes, Route } from 'react-router-dom';
import Login from './Login';
import MainPage from './MainPage';

const Main = () => {
return (         
    <Routes>
    <Route path='/' element={<Login/>} />
    <Route path='/MainPage' element={<MainPage/>} />
  </Routes>
);
}
export default Main;