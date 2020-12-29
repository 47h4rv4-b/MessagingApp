import React from 'react'
import { Form, InputGroup } from 'react-bootstrap'

export default function OpenConversation() {
    const [text, setText] = useState('')

    return (
        <div className="d-flex flex-column flex-grow-1">
            <div className="flex-grow-1 overflow-auto">

            </div>

            <Form>
                <Form.Group className="m-2"
                    as="textarea" 
                    required 
                    value={text} 
                    onChange={e => setText(e,taret.value)} 
                    style={{height:'75px', resize:'none'}}

                    />
                </Form.Group>

            </Form.Control>
        </div>
    )
}