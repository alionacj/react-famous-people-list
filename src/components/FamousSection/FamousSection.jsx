import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './FamousSection.css';

function FamousSection() {

  // TODO: on load, call the fetchPeople() function
  useEffect(() => {
    fetchPeople()
  }, [])

  let [famousPersonName, setPersonName] = useState('');
  let [famousPersonRole, setPersonRole] = useState('');
  let [famousPeopleArray, setPeopleArray] = useState([]);

  const fetchPeople = () => {
    // TODO: fetch the list of people from the server
    axios({
      method: 'GET',
      url: '/people'
    })
    .then((response) => {
      setPeopleArray(response.data)
    })
    .catch((error) => {
      console.error(error)
    })
  }

  const addPerson = (event) => {
    event.preventDefault();
    console.log(`The person is ${famousPersonName} and they're famous for ${famousPersonRole}`);
    
    // TODO: create POST request to add this new person to the database
    axios({
      method: 'POST',
      url: '/people',
      data: {
        name: famousPersonName,
        role: famousPersonRole
      }
    })
    .then((response) => {
      setPersonName('')
      setPersonRole('')
      fetchPeople()
    })
    .catch((error) => {
      console.error(error)
    })

    // HINT: the server is expecting a person object 
    //       with a `name` and a `role` property
  
  }

    return (
      <section className="new-person-section">
        <form onSubmit={addPerson}>
          <label htmlFor="name-input">Name:</label>
          <input
            id="name-input"
            value={famousPersonName}
            onChange={e => setPersonName(e.target.value)}
          />
          <label htmlFor="role-input">Famous for:</label>
          <input
            id="role-input"
            value={famousPersonRole}
            onChange={e => setPersonRole(e.target.value)}
          />
          <button type="submit">Done</button>
        </form>
        <ul>
          {
            famousPeopleArray.map((person) => {
              return <li key={person.id}>{person.name} is famous for "{person.role}"</li>
            })
          }
        </ul>
      </section>
    );
}

export default FamousSection;
