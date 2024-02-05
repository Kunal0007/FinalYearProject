import { BrowserRouter as Router,Route, Routes } from 'react-router-dom'
import PrivateRoutes from './routes/PrivateRoutes'
import './App.css'
import { AuthRoutes } from './components/auth';
import { JobsRoutes } from './components/jobs';

function App() {
  return (
    <>
      <Router>
          <Routes>
            <Route path="/" element={<PrivateRoutes />}>
                <Route element={<JobsRoutes/>} path="/" />
                {/* <Route element={<Products/>} path="/products"/> */}
            </Route>
          </Routes>
          <AuthRoutes/>
      </Router>
    </>
  );
}

export default App;