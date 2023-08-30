import './App.css';

// DAY 16 - 載入 Routes & Route
// DAY 18 - 載入 Outlet & useParams

import { HashRouter, NavLink, Routes, Route, Outlet, useParams } from 'react-router-dom';

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
};

const Index = () => {
  return <h1>Hello React !!</h1>
};

// DAY 18

const Post = () => {
  return (
    <>
      <h2>POST</h2>
      <Outlet />
    </>
  )
};

const PostId = () => {
  
  let params = useParams();

  return (
    <p>Your Post ID: {params.postId}</p>
  )
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
          <NavLink to="/post">
            <p>Post 頁面</p>
          </NavLink>
          <NavLink to="/post/12345">
            <p>Post 詳細</p>
          </NavLink>
        </div>
        {/* Routes, Route 練習區 */}
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/todo" element={<Todo />} />
          <Route path="*" element={<NotFound />} />
          {/* DAY18 巢狀路由 */}
          <Route path="/post" element={<Post />}>
            <Route path=":postId" element={<PostId />} />
          </Route>
        </Routes>
        {/* 練習區 */}
      </HashRouter>
    </div>
  );
}

export default App;
