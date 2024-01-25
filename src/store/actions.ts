import { createAction } from '@reduxjs/toolkit'

interface Contact {
  name: string
  email: string
  phone: string
}

export const addContact = createAction<Contact>('ADD_CONTACT')
export const removeContact = createAction<number>('REMOVE_CONTACT')
export const editContact = createAction<{ index: number; contact: Contact }>(
  'EDIT_CONTACT'
)
