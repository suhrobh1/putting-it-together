import React, {useState} from 'react';

const Persons = (props) => {

    const {firstName, lastName, hairColor, age} = props;
    const [getAge, setAge] = useState(age);
    return (
        <div>
            <p>{lastName}, {firstName}</p>
            <p>Age: {getAge}</p>
            <p>Hair Color: {hairColor}</p>
            <button onClick = {(event) => setAge(getAge +1)}> Birthday Button for {firstName} {lastName}</button>
        </div>
    )
}
export default Persons;