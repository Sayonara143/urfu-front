import { instance, instanceWithToken } from './Api';

export const AuthAPI = {
  login(email, password) {
    return new Promise((res, rej) => {
      setTimeout(() => {
        if (email === 'admin@admin.ru' && password === 'admin') {
          res({
            data: {
              accessToken: '111qqq',
            },
          });
        }
        rej({
          response: {
            data: 'Неверный логин или пароль',
          },
        });
      }, 3000);
    });
    // return instance.post('api/v0/oauth/tokens', { email, password });
  },
  logout() {
    return instanceWithToken.get('api/v0/admin/logout');
  },
  me() {
    console.log(33);
    return new Promise((res, rej) => {
      setTimeout(() => {
        if (localStorage.getItem('token') === '111qqq') {
          console.log(55);
          res();
        }
        rej();
      }, 4000);
    });
    // return instanceWithToken.get('api/v0/admin/sync');
  },
};
