import React, {useState} from "react";
import { Form } from "semantic-ui-react";

const defaultForm = {
  name: '',
  hp: '',
  frontUrl: '', 
  backUrl: ''
}

function PokemonForm({handleNewPokemon}) {
  const [formData, setFormData] = useState(defaultForm)

  const handleFormChange = e => {
    setFormData({...formData, [e.target.name]: e.target.value})
  }

  const handleFormSubmit = e => {
    e.preventDefault()
    const newPokemon = {
      name: formData.name,
      hp: formData.hp,
      sprites: {
        front: formData.frontUrl,
        back: formData.backUrl
      }
    }
    fetch('http://localhost:3001/pokemon', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newPokemon)
    })
      .then(resp => resp.json())
      .then(pokemon => {
        handleNewPokemon(pokemon)
        setFormData(defaultForm)
      })
  }

  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form onSubmit={handleFormSubmit}>
        <Form.Group widths="equal">
          <Form.Input 
            fluid 
            label="Name" 
            placeholder="Name" 
            name="name" 
            value={formData.name}
            onChange={handleFormChange}
          />
          <Form.Input 
            fluid 
            label="hp" 
            placeholder="hp" 
            name="hp" 
            value={formData.hp}
            onChange={handleFormChange}
          />
          <Form.Input
            fluid
            label="Front Image URL"
            placeholder="url"
            name="frontUrl"
            value={formData.frontUrl}
            onChange={handleFormChange}
          />
          <Form.Input
            fluid
            label="Back Image URL"
            placeholder="url"
            name="backUrl"
            value={formData.backUrl}
            onChange={handleFormChange}
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
