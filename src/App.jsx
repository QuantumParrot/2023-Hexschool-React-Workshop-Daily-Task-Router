import './App.css';
import { HashRouter, NavLink, Routes, Route } from 'react-router-dom';

// DAY 16 - 將頁面拆成元件

import Register from './pages/Register';
import Login from './pages/Login';
import Todo from './pages/Todo';

// const Todo = () => {
//   return <p>這是 Todo 頁面</p>;
// };
// const Login = () => {
//   return <p>這是登入頁面</p>;
// };
// const Register = () => {
//   return <p>這是註冊頁面</p>;
// };

const NotFound = () => {
  return <p>沒有這個路由(´⊙ω⊙`)</p>
}

const Index = () => {
  return <h1>Hello React !!</h1>
}

function App() {
  return (
    <div className="container">
      <HashRouter>
        <div className="nav-link">
          <NavLink to="/">
            <p>回到首頁</p>
          </NavLink>
          <NavLink to="/register">
            <p>註冊頁面</p>
          </NavLink>
          <NavLink to="/login">
            <p>登入頁面</p>
          </NavLink>
          <NavLink to="/todo">
            <p>Todo 頁面</p>
          </NavLink>
        </div>
        {/* Routes, Route 練習區 */}
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/todo" element={<Todo />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        {/* 練習區 */}
      </HashRouter>
    </div>
  );
}

export default App;
