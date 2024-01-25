import { createReducer, PayloadAction } from '@reduxjs/toolkit'
import { addContact, removeContact, editContact } from './actions'

interface Contact {
  name: string
  email: string
  phone: string
}

export interface RootState {
  contacts: Contact[]
}

const initialState: RootState = {
  contacts: []
}

export const rootReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(addContact, (state, action: PayloadAction<Contact>) => {
      state.contacts.push(action.payload)
    })
    .addCase(removeContact, (state, action: PayloadAction<number>) => {
      state.contacts.splice(action.payload, 1)
    })
    .addCase(
      editContact,
      (state, action: PayloadAction<{ index: number; contact: Contact }>) => {
        const { index, contact } = action.payload
        state.contacts[index] = contact
      }
    )
})

export default rootReducer
