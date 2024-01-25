// src/styles.ts
import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 800px;
  margin: 0 auto;
`

export const ContactsListContainer = styled.div`
  width: 48%;
  background-color: #ffffff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`

export const AddContactContainer = styled.div`
  width: 48%;
  height: 50%;
  background-color: #ffffff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 20px;
`

export const ContactItem = styled.div`
  margin-bottom: 10px;
  padding: 10px;
  border: 1px solid #dee2e6;
  border-radius: 5px;
  background-color: #ffffff;

  .font-weight-bold {
    font-weight: bold;
  }
`

export const Button = styled.button`
  cursor: pointer;
  // Adicione estilos adicionais conforme necessário
`

// Adicione mais estilos conforme necessário
