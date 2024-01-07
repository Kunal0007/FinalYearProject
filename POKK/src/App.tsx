import { BrowserRouter as Router,Route, Routes } from 'react-router-dom'
import PrivateRoutes from './routes/PrivateRoutes'
import './App.css'
import { AuthRoutes } from './components/auth';

function App() {
  return (
    <>
      <Router>
          <Routes>
            <Route element={<PrivateRoutes />}>
                {/* <Route element={<Home/>} path="/" exact/>
                <Route element={<Products/>} path="/products"/> */}
            </Route>
          </Routes>
          <AuthRoutes/>
      </Router>
    </>
  );
}

export default App;