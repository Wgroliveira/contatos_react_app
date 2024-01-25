import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { RootState } from './store'
import { addContact, removeContact, editContact } from './store/actions'

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 800px;
  margin: 0 auto;
`
const ContactsList = styled.div`
  width: 48%;
  background-color: #ffffff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`
const AddContactContainer = styled.div`
  width: 48%;
  height: 50%;
  background-color: #ffffff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 20px;
`
const Contact = styled.div`
  margin-bottom: 10px;
  padding: 10px;
  border: 1px solid #dee2e6;
  border-radius: 5px;
  background-color: #ffffff;
`
const App: React.FC = () => {
  const dispatch = useDispatch()
  const contacts = useSelector((state: RootState) => state.contacts)

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')

  const isNameExists = (name: string): boolean => {
    return contacts.some((contact) => contact.name === name)
  }

  const isEmailExists = (email: string): boolean => {
    return contacts.some((contact) => contact.email === email)
  }

  const isPhoneExists = (phone: string): boolean => {
    return contacts.some((contact) => contact.phone === phone)
  }

  const handleAddContact = () => {
    if (isNameExists(name)) {
      alert('Este nome já está cadastrado na lista.')
      return
    }

    if (isEmailExists(email)) {
      alert('Já existe um cadastro com este e-mail.')
      return
    }

    if (isPhoneExists(phone)) {
      alert('Já existe um cadastro com este número de telefone.')
      return
    }

    dispatch(addContact({ name, email, phone }))
    setName('')
    setEmail('')
    setPhone('')
  }

  const handleRemoveContact = (index: number) => {
    dispatch(removeContact(index))
  }

  const handleEditContact = (index: number) => {
    const editedName = prompt('Novo nome:', contacts[index].name)
    const editedEmail = prompt('Novo e-mail:', contacts[index].email)
    const editedPhone = prompt('Novo telefone:', contacts[index].phone)

    if (editedName !== null && editedEmail !== null && editedPhone !== null) {
      dispatch(
        editContact({
          index: index,
          contact: {
            name: editedName,
            email: editedEmail,
            phone: editedPhone
          }
        })
      )
    }
  }

  return (
    <Container>
      <ContactsList>
        <h2 className="mb-4 text-center text-primary">Lista de Contatos</h2>
        {contacts.map((contact, index) => (
          <Contact key={index}>
            <span className="font-weight-bold">{contact.name}</span>
            <br />
            <span>{contact.email}</span>
            <br />
            <span>{contact.phone}</span>
            <div className="mt-2">
              <button
                className="btn btn-info btn-sm mr-2"
                onClick={() => handleEditContact(index)}
              >
                Editar
              </button>
              <button
                className="btn btn-danger btn-sm"
                onClick={() => handleRemoveContact(index)}
              >
                Remover
              </button>
            </div>
          </Contact>
        ))}
      </ContactsList>

      <div className="divider"></div>

      <AddContactContainer>
        <h3 className="mb-3 text-center text-primary">Adicionar Contato</h3>
        <div>
          <div>
            <label htmlFor="name">Nome</label>
          </div>
          <div className="adicao">
            <input
              type="text"
              id="name"
              className="form-control"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="email">E-mail:</label>
          </div>
          <div className="adicao">
            <input
              type="text"
              id="email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="phone">Telefone:</label>
          </div>
          <div className="adicao">
            <input
              type="text"
              id="phone"
              className="form-control"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <button className="btn btn-primary mt-3" onClick={handleAddContact}>
            Adicionar
          </button>
        </div>
      </AddContactContainer>
    </Container>
  )
}

export default App
