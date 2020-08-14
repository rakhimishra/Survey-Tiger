import React,{useState} from 'react'
import Form from 'react-bootstrap/Form';
export default function CreateSurvey() {
    const [input , setInput] = useState([
        {question: ' '},
        // {option:[]}
    ])
    return (
        <div className = "">
            <form>
                {input.map((input, index) =>

                    <div key = {index}>
                    <Form className="form mt-4">
                    <Form.Group controlId="exampleForm.ControlSelect1">
                        
                        <Form.Control as="select">
                          <option>Single Select </option>
                          <option>Multi select</option>
                        </Form.Control>
                    </Form.Group>
                    </Form>
                    </div>
                )}
            </form>
        </div>
    )
}
