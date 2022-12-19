import { AuthAPI } from '../../services/authService';
import { authActions } from '../reducer/authSlice';

export const login =
  ({ email, password }) =>
  (dispatch) => {
    dispatch(authActions.setIsLoading(true));
    dispatch(authActions.addError(null));

    AuthAPI.login(email, password)
      .then((response) => {
        localStorage.setItem('token', response.data.accessToken);
        dispatch(authActions.setIsAuth(true));
      })
      .catch((error) => {
        dispatch(authActions.addError(error.response.data));
      })
      .finally(() => {
        dispatch(authActions.setIsLoading(false));
      });
  };

export const logout = () => (dispatch) => {
  dispatch(authActions.setIsLoading(true));
  AuthAPI.logout()
    .then((response) => {
      if (response.status === 200) {
        localStorage.removeItem('token');
        dispatch(authActions.setIsAuth(false));
      }
    })
    .catch((error) => {
      dispatch(authActions.addError(error.response.data));
    })
    .finally(() => {
      dispatch(authActions.setIsLoading(false));
    });
};

export const sync = () => (dispatch) => {
  dispatch(authActions.setIsLoading(true));
  AuthAPI.me()
    .then(() => {
      dispatch(authActions.setIsAuth(true));
    })
    .catch(() => {
      dispatch(authActions.setIsAuth(false));
    })
    .finally(() => {
      console.log('ssss');
      dispatch(authActions.setIsLoading(false));
    });
};
