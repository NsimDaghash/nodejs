const fs=require('fs');

const getItemsFromJSON=()=>{
    try{
        const dataBUFFER=fs.readFileSync('items.json')
        const dataSTRING=dataBUFFER.toString();
        return JSON.parse(dataSTRING);
    }
    catch(e){
        return []
    }

}
/*  a function to delete item from the list the list */
const deleteItem=(id)=>{
    const itemslist=getItemsFromJSON();
    let deletedItem=undefined ;
    const filteredItems=itemslist.filter(item=>{
        if(item.id===parseInt(id)){
            deletedItem = item;
            return false;
        }
        else
            return true;

    })
     fs.writeFileSync('items.json',JSON.stringify(filteredItems))
     return deletedItem
    }
/* a function to add item to the list */
const addItem=({name,price})=>{
   
    const itemslist=getItemsFromJSON();
    const item={
        name:name,
        price:price,
        id:itemslist.length==0?0:itemslist[itemslist.length-1].id+1
    }
    itemslist.push(item)
    fs.writeFileSync('items.json',JSON.stringify(itemslist))
    return item;
}

    /* return the new result after submiting each method*/ 
module.exports={
    getItemsFromJSON:getItemsFromJSON,
    addItem:addItem,
    deleteItem:deleteItem
}