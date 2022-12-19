import React, { useRef, useEffect } from 'react';
import { useDispatch } from 'react-redux/es/exports';
import { Outlet, useNavigate } from 'react-router-dom';
//
import { Button } from 'primereact/button';
import { SlideMenu } from 'primereact/slidemenu';
//
import classes from './AdminLayout.module.scss';
import { logout, sync } from '../../store/asyncAction/auth';

export default function AdminLayout() {
  const menu = useRef(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(sync());
  }, []);
  const items = [
    {
      label: 'Услуги',
      icon: 'pi pi-fw pi-file',
      command: () => {
        navigate('/admin/service');
      },
    },
    {
      label: 'Соотрудники',
      icon: 'pi pi-fw pi-user',
      command: () => {
        navigate('/admin/staff');
      },
    },
    {
      label: 'Календарь',
      icon: 'pi pi-fw pi-calendar',
      command: () => {
        navigate('/admin/calendar-note');
      },
    },
    {
      label: 'Рабочие дни',
      icon: 'pi pi-fw pi-table',
      command: () => {
        navigate('/admin/work-day');
      },
    },
    {
      label: 'Настройки',
      icon: 'pi pi-fw pi-cog',
      command: () => {
        navigate('/admin/settings');
      },
    },
    {
      label: 'Выйти',
      icon: 'pi pi-fw pi-power-off',
      command: () => {
        console.log(1);
        dispatch(logout());
      },
    },
  ];
  return (
    <>
      <SlideMenu ref={menu} model={items} popup viewportHeight={182}></SlideMenu>
      <div className={classes.container}>
        <div style={{ marginTop: '20px', marginLeft: '10px' }} className={classes.btnMenu}>
          <Button
            icon='pi pi-bars'
            onClick={(event) => menu.current.toggle(event)}
            className='mr-2'
          />
        </div>
        <Outlet />
      </div>
    </>
  );
}
