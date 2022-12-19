import Router from './router';
import './App.scss';
import Toast from './components/toast/Toast';
import './assets/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { sync } from './store/asyncAction/auth';
// import 'moment/locale/ru';

function App() {
  const dispatch = useDispatch();
  const { isLoading } = useSelector((state) => state.auth);
  useEffect(() => {
    dispatch(sync());
  }, []);
  if (isLoading) {
    <div>Loading...</div>
  }
  return (
    <>
      <Toast />
      <Router />
    </>
  );
}

export default App;
