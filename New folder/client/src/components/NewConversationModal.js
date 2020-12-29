import React, { useState } from 'react'
import { Modal, Form, Button } from 'react-bootstrap'
import { useContacts } from '../contexts/ContactsProvider'
import { useConversations } from '../contexts/ConversationsProvider' 

export default function NewConversationModal({ closeModal }) {
    const [selectedContactIds, setSelectedContactIds] = useState([])
    const {contacts} = useContacts()
    const {createConversation} = useConversations()

    function handleSubmit(e){
        e.preventDefault()

        createConversation(selectedContactIds)
        closeModal()
    }


    function handleCheckboxChange(contactId) {
        setSelectedContactIds(prevSelectedContactIds => {
            if( prevSelectedContactIds.includes(contactId)){
                return prevSelectedContactIds.filter(prevId => {
                    return contactId !== prevId
                })
            }else {
                return [...prevSelectedContactIds, contactId]
            }
        })
    }

    return (

        <React.Fragment>    
            <Modal.Header closeButton>Create Conversation</Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleSubmit}>
                    {contacts.map(contact => {
                        <Form.Group>
                            <Form.Check 
                                type = "checkbox"
                                value = {selectedContactIds.includes(contact.id)}
                                label = {contact.name}
                                onChange= {() => handleCheckboxChange(contact.id)}
                            />

                            
                        </Form.Group>
                    })}
                </Form>
                <Button type="submit"></Button>
            </Modal.Body>
        </React.Fragment>

    )
}