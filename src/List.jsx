function List(props) {


    const category = props.category;
    const itemList = props.items;
    // fruits.sort((a,b) => a.name.localeCompare(b.name));  //Alphabetical
    // fruits.sort((a,b) => b.name.localeCompare(a.name)); //reverse Alphabetical
    // fruits.sort((a,b) => a.calories - b.calories ); //numeric 
    // fruits.sort((a,b) => b.calories - a.calories ); // reverse numeric 

    // const lowCalFruits =  fruits.filter(fruit => fruit.calories < 100)
    // const highCalFruits =  fruits.filter(fruit => fruit.calories > 100)

    const listItems =itemList.map(item => 
                        <li key={item.id}>
                            {item.name}: &nbsp;
                            <b>{item.calories}</b> </li>);

    return (<>
                <h3 className = "list-category">{category}</h3> <ol className = "list-item">{listItems}</ol>
            </>); 
}

export default List