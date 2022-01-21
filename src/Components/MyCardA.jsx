import React from 'react'
import { FaLock,FaLockOpen } from "react-icons/fa";
import style from "../myStyles.module.css"

const MyCardA = (props) => {
    return (
        <div className={style.box} >
            <div className={style.bx} >{props.numero}</div>
            <div className={style.cr}>
                <div className={style.tit}>{props.titulo}</div>
                <div className={style.ic}>
                    <div className={ props.if === true ? style.lock  :  style.lock0  }>
                        {
                            props.if === true ?  <FaLock className='hola' /> :  <FaLockOpen className='hola' />
                        }
                    </div>
                    
                    </div>
                
            </div>
   
        </div>
    )
}

export default MyCardA
