import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';

export const PrivateRoute = ({ children }) => {
  const { isAuth, isLoading } = useSelector((state) => state.auth);
  let location = useLocation();
  if (isLoading) {
    return <p>Checking authenticaton..</p>;
  }

  if (!isAuth) {
    return <Navigate to='/auth/user' state={{ from: location }} />;
  }

  return children;
};
