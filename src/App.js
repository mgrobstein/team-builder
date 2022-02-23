import './App.css';
import React, {useState} from 'react'
import Form from "./Form"
import Friend from './Friend'

const defaultValues = ({
  name:"",
  email:"",
  role:""
})

function App() {
const [userNames, setUserNames] = useState([])
const [values, setValues] = useState({defaultValues})
const onFormSubmit = () => {
  setUserNames([values, ...userNames]);
  setValues({name:'', email:'', role:''})
}

const onChange = (name, value) => {
  setValues({...values, [name]:value});
}

  return (
    <div className="App">
      <Form
      values = {values}
      change={onChange}
      submit={onFormSubmit}
    />
    {
    userNames.map(friend => {
          return (
            <Friend key={friend.id} details={friend} />
          )
        })
      }
    </div>
  )}

export default App;
