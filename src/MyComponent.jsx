import React, {useState} from 'react'


function MyComponent(){
    const [name, setName] = useState();
    const [age, setAge] = useState(0);
    const [isEmployed, setisEmployed] = useState(false);
    const updateName = () => {
        setName('Kuy');

    }

    const incrementAge = () => {
        setAge(age+1);

    }

    const toggleEmployedStatus= () =>{
        setisEmployed(!isEmployed);
    }

    return(<div>
            <p>
                Name: {name}
            </p>

            <button onClick={updateName}>Set Name</button>

             <p>
                Age: {age}
            </p>

            <button onClick={incrementAge}>Increment Age</button>

            <p>
                Is Employed: {isEmployed ? "Yes" : "No"}
            </p>

            <button onClick={toggleEmployedStatus}>Change</button>
    </div>);
}

export default MyComponent