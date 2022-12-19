
import React from 'react'
import AccordionTab from '../../components/accordionTab/AccordionTab';
import classes from './Subjects.module.scss'


const Subjects = () => {

const accordionData = [
    {
      title: 'Web-технологии',
      content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis sapiente
      laborum cupiditate possimus labore, hic temporibus velit dicta earum
      suscipit commodi eum enim atque at? Et perspiciatis dolore iure
      voluptatem.`
    },
    {
      title: 'Анализ данных',
      content: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia veniam
      reprehenderit nam assumenda voluptatem ut. Ipsum eius dicta, officiis
      quaerat iure quos dolorum accusantium ducimus in illum vero commodi
      pariatur? Impedit autem esse nostrum quasi, fugiat a aut error cumque
      quidem maiores doloremque est numquam praesentium eos voluptatem amet!
      Repudiandae, mollitia id reprehenderit a ab odit!`
    },
    {
      title: 'Базы данных',
      content: `Sapiente expedita hic obcaecati, laboriosam similique omnis architecto ducimus magnam accusantium corrupti
      quam sint dolore pariatur perspiciatis, necessitatibus rem vel dignissimos
      dolor ut sequi minus iste? Quas?`
    }
  ];
  return (
    <div className={classes.container}>
        <div className={classes.header}>Выбор ИРИТ-РТФ, ИНМТ, ИнФО 2 курс 3 семестр (2022-2023 уч.г.)</div>
        <div className={classes.description}>
            На этом этапе нужно определиться с курсами и модулями, которые вы будете изучать.<br />
            Учебные команды вы можете выбрать, нажав на модуль. <br />
            <span>Количество команд, в которые вы записаны: 6. </span>
        </div>
        <div className={classes.help}>
            <span>Возможность записи на курсы закрыта с 02 сентября 2022 г. 19:00</span>
        </div>
        <div className={classes.list}>
            <div className={classes.accordion}>
                { accordionData.map(({title, content}, index)=> {
                    return <AccordionTab key={index} title={title} content={content}/>
                })}

            </div>
        </div>
        <div></div>
    </div>
  )
}

export default Subjects