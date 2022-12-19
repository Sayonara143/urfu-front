import React, { useState } from 'react';

import { useFormik } from 'formik';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Password } from 'primereact/password';
import { classNames } from 'primereact/utils';

import classes from './Auth.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../store/asyncAction/auth';

const Auth = () => {
  const dispatch = useDispatch();

  // eslint-disable-next-line no-unused-vars
  const [formData, setFormData] = useState({});
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validate: (data) => {
      let errors = {};

      if (!data.email) {
        errors.email = 'Это поле обязательно.';
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(data.email)) {
        errors.email = 'Неверный адрес электронной почты. Например. example@email.com';
      }

      if (!data.password) {
        errors.password = 'Это поле обязательно.';
      }

      return errors;
    },
    onSubmit: (data) => {
      setFormData(data);
      dispatch(login(data));
      formik.resetForm();
    },
  });

  const isFormFieldValid = (name) => !!(formik.touched[name] && formik.errors[name]);
  const getFormErrorMessage = (name) => {
    return isFormFieldValid(name) && <small className='p-error'>{formik.errors[name]}</small>;
  };

  return (
    <div className={classes.container}>
      <div className='form-auth'>
        <div className='flex justify-content-center'>
          <div className='card'>
            <h5 className='text-center'>Авторизация</h5>
            <form onSubmit={formik.handleSubmit} className='p-fluid'>
              <div className='field'>
                <span className='p-float-label p-input-icon-right'>
                  <i className='pi pi-envelope' />
                  <InputText
                    id='email'
                    name='email'
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    className={classNames({ 'p-invalid': isFormFieldValid('email') })}
                  />
                  <label
                    htmlFor='email'
                    className={classNames({ 'p-error': isFormFieldValid('email') })}
                  >
                    Email
                  </label>
                </span>
                {getFormErrorMessage('email')}
              </div>
              <div className='field'>
                <span className='p-float-label'>
                  <Password
                    id='password'
                    name='password'
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    toggleMask
                    feedback={false}
                    className={classNames({ 'p-invalid': isFormFieldValid('password') })}
                  />
                  <label
                    htmlFor='password'
                    className={classNames({ 'p-error': isFormFieldValid('password') })}
                  >
                    Пароль
                  </label>
                </span>
                {getFormErrorMessage('password')}
              </div>
              <Button type='submit' label='Войти' className='mt-2' />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
