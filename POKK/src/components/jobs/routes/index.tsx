import { Navigate, Route, Routes } from 'react-router-dom';
import Jobs from '../components/Jobs';


// import { Discussions } from './Discussions';

export const JobsRoutes = () => {
  return (
    <Routes>
      <Route path="" element={<Jobs />} />
      <Route path=":JobId" element={<Jobs />} />
      <Route path="*" element={<Navigate to="." />} />
    </Routes>
  );
};