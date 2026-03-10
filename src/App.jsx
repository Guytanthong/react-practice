import Card from './Card.jsx'
import Button from './Button.jsx'
import Student from './Student.jsx'
import List from './List.jsx'
import ProfilePicture from './ProfilePicture.jsx'
import MyComponent from './MyComponent.jsx'
import Counter from './Counter.jsx'
import MyComponent2 from './MyComponent2.jsx'
import ColorPicker from './ColorPicker.jsx'
import ToDoList from './ToDoList.jsx'



function App() {

  const fruits = [{id:1, name:"apple", calories: 95}, 
                  {id:2, name: "orange" , calories: 45}, 
                  {id:3, name:"banana", calories: 105}, 
                  {id:4 ,name:"coconut", calories: 159}];


  const vegetables = [{id:6, name:"carrot", calories: 110}, 
                      {id:7, name: "celery" , calories: 15}, 
                      {id:8, name:"potatoes", calories: 25}, 
                      {id:9 ,name:"corn", calories: 63}];

  return(
    <>
    <Card/>
    <Button/>

    
    <Student name="SpongeBob" age={13} isStudent={true}/>
    <Student name="Usagi" age={13} isStudent={true}/>



    {fruits.length > 0 && <List items={fruits} category="Fruits"/> } //shortcurcuiting
    {vegetables.length > 0 ? <List items={vegetables} category="Vegetables"/> : null}
    
    <ProfilePicture/>
    
    <MyComponent/>
    <Counter/>

    <MyComponent2/>

    <ColorPicker/>


    <ToDoList/>
    </>
    
  );
      
}

export default App
