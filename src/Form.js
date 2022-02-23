import React from 'react';

const form = (props) => {
    const change = evt => {
        const {name, value } =evt.target;
        props.change(name, value)
    }


const submit = evt => {
    evt.preventDefault();
    props.submit();
}
    return (
        <form onFormSubmit= {submit}>
            <label>User Name:
                <input
                placeholder='Type the user name here'
                value = {props.values.name}
                name="name"
                type="text"
                onChange={change}
                />
            </label>
            <label>Role:
                <input
                placeholder='Type the role here'
                value = {props.values.role}
                name="role"
                type="text"
                onChange={change}
                />
                </label>
            <label>Email:
                <input
                placeholder='Type the email here'
                value = {props.values.mail}
                name="mail"
                type="text"
                onChange={change}
                />
                </label>
                <div className='submit'>
          <button>submit</button>
        </div>
        </form>
        
    )
}
export default form;