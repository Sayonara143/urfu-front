import React, { useState } from 'react'
import classes from './AccordionTab.module.scss'

const AccordionTab = ({title, content}) => {
    const [isActive, setIsActive] = useState(false);
  return (
    <div className={classes.item}>
        <div className={classes.item_header} onClick={() => setIsActive(!isActive)}>{title}</div>
        {isActive && <div className={classes.item_content}>{content}</div>}
    </div>
  )
}

export default AccordionTab