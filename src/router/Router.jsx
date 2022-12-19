import { Routes, Route, Navigate } from 'react-router-dom';

import Auth from '../pages/auth/Auth';
import Subjects from '../pages/subjects/Subjects';

import AdminLayout from '../layouts/admin';
import UserLayout from '../layouts/user';

import NotFound from '../pages/notFound/NotFound';

import { useSelector } from 'react-redux';

import { PrivateRoute } from './privateRouter';
import Main from '../pages/main/Main';

export default function Router() {
  const { isAuth } = useSelector((state) => state.auth);

  return (
    <Routes>
      <Route
        path='/user'
        element={
          <PrivateRoute>
            <UserLayout />
          </PrivateRoute>
        }
      >
        <Route path='cabinet' element={<div>cabinet</div>} />
        <Route path='subjects' element={<Subjects />} />
        <Route path='trajectories' element={<div>trajectories</div>} />
        <Route path='*' element={<Navigate to={'cabinet'} />} />
        <Route path='/user' element={<Navigate to={'cabinet'} />} />
      </Route>

      <Route path='/admin' element={<AdminLayout />}>
        <Route path='service' element={<div>service</div>} />
        <Route path='staff' element={<div>staff</div>} />
        <Route path='*' element={<Navigate to={'service'} />} />
        <Route path='/admin' element={<Navigate to={'service'} />} />
      </Route>

      <Route path='/auth/admin' element={!isAuth ? <Auth /> : <Navigate to={'/admin'} />} />
      <Route path='/auth/user' element={!isAuth ? <Auth /> : <Navigate to={'/user'} />} />
      <Route path='/' element={<Main />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  );
}
