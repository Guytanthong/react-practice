import Card from './Card.jsx'
import Button from './Button.jsx'
import Student from './Student.jsx'

function App() {
  return(
    <>
    <Card/>
    <Button/>

    
    <Student name="SpongeBob" age={13} isStudent={true}/>
    <Student name="Usagi" age={13} isStudent={true}/>

    </>
    
  );
      
}

export default App
