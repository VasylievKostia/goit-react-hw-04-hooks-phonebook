
import './App.css';
import {useEffect, useState } from 'react';
import { ContactList } from './components/ContactList/ContactList.js';
import { ContactsForm } from './components/ContactsForm/ContactsForm'
import Filter  from "./components/Filter/Filter";

function App() {
  const [contacts, setContacts] = useState([
    { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
    { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
    { id: "id-3", name: "Eden Clements", number: "645-17-79" },
    { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
  ])
  const [filter, setFilter] = useState('')
  useEffect(() => {
    const localData = JSON.parse(localStorage.getItem('data'))
    if (localData) {
      setContacts(localData);
    }
  }, [])
  useEffect(() => {
    localStorage.setItem('data', JSON.stringify(contacts))
  }, [contacts])

  const deleteContact = (e) => {
    console.log('del')
    setContacts((prevState) => {
    return  prevState.filter((elem) => elem.id !== e.target.id)
    }
)}
const changeFilter = (e) => {
    setFilter(e.currentTarget.value);
};
  const onFormSubmit = (obj) => {
    setContacts(prev => {
      return [...prev, obj]
      
    })
  }
 const renderContacts = () => {
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
 };

    return (<div className="App">
        <h1>PhoneBook</h1>
        <ContactsForm onFormSubmit={onFormSubmit} />
        <h2>Contacts</h2>
        <Filter value={filter} changeFilter={changeFilter}/>
        <ContactList
          onDeleteContacts={deleteContact}
           contacts={renderContacts()}
        />
    </div>
  );
  
}
export default App
