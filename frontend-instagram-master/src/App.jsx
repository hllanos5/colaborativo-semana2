import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Register from './pages/Register';
import ProtectedRoute from './pages/ProtectedRoute';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Login />} />
      <Route element={<ProtectedRoute />}>
        <Route path='/dashboard' element={<Dashboard />} />
      </Route>
      <Route path='/register' element={<Register />} />
    </Routes>
  );
}

export default App;
