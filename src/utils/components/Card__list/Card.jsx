import React from 'react'
import s from './Card.module.css'


const Card = ({url,name}) => {
  return (
  <>
  <div className={s.card}>
    <div className={s.div__Img}><img  className={s.img} src={url}/></div>
    <h1 className={s.name__Card}>{name}</h1>
    <div ><button className={s.Button__Card}>В корзину</button></div>
  </div>
  </>
  )
}
 
export default Card