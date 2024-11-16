
import Items__Card from '../Card__Items/items'
import Title__items from '../Title/title'
import ItHeader from '../Header__It/header'
import './Pages.css'


function FullCardList () {
  return (
    <>
    <ItHeader></ItHeader>


    <Title__items></Title__items>
     <div className='div__contain'>
      <div className='contain'>
        <Items__Card></Items__Card>
      </div>
     </div>
    </>
  )
}

export default FullCardList