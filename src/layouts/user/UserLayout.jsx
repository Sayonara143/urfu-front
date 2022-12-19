import React from 'react';
import { Outlet, Link, NavLink } from 'react-router-dom';
import classes from './UserLayout.module.scss';
import avatar from '../../assets/avatar.svg';

const UserLayout = () => {
  const items = [
    {
      to: '/user/cabinet',
      title: 'Личный кабинет',
    },
    {
      to: '/user/subjects',
      title: 'Предметы',
    },
    {
      to: '/user/trajectories',
      title: 'Траектории',
    },
  ];

  return (
    <div className={classes.container}>
      <div className={classes.panelMenu}>
        <div className={classes.wrapper}>
          <div className={classes.menuHeader}>
            <Link to={'/'} className={classes.logo}>
              <div className={classes.logo_text}>Ellisium</div>
            </Link>
          </div>
          <div className={classes.menuNav}>
            {items.map((item, index) => {
              return (
                <NavLink
                  key={index}
                  to={item.to}
                  activeClassName={classes.navLink__active}
                  className={classes.navLink__default}
                >
                  <span>{item.title}</span>
                  <i className='pi pi-ellipsis-v'></i>
                </NavLink>
              );
            })}
          </div>
        </div>

        <div className={classes.version}>
          <span className={classes.version_header}>Ellisium</span>
          <span className={classes.version_desc}>Версия 1.0.0 - о сайте</span>
        </div>
      </div>
      <div className={classes.dashboard}>
        <div className={classes.dashboard_header}>
          <div className={classes.headerInfo}>
            <span>РИ-210936</span>
            <span>Быков А. С.</span>
            <div className={classes.headerInfo_avatar}>
              <img src={avatar} alt='' />
            </div>
          </div>
        </div>
        <div className={classes.dashboard_outlet}>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default UserLayout;
