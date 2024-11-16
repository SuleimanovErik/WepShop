import Card from "../Card__list/Card"
import { goodsItems } from "../Catalog/catalog"

const Items__Card = () => {
  return (
    <>
    {goodsItems.map((item,index)=> <Card key={index} url={item.url} name={item.name}></Card>)}
    </>
  )
}

export default Items__Card