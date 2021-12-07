import logo from './logo.svg';
import './App.css';
import Persons from './components/Persons';

function App() {
  const objectPersons = [
    {
      firstName: "Jane", 
      lastName: "Doe",
      hairColor: "Black",
      age: 45
    },
    {
      firstName: "John", 
      lastName: "Smith",
      hairColor: "Brown",
      age: 88
    }
  ];
 
  return (
    <div className="App">
      { 
        objectPersons.map((value, index) => (
        <Persons key = {index}
          firstName = {value.firstName}
          lastName = {value.lastName}
          age = {value.age}
          hairColor = {value.hairColor}
      />
      ))

      } 
     
    </div>
  );
}

export default App;
