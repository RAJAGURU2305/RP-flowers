import React from 'react'
import Card from 'react-bootstrap/Card';

const Imagetag = () => {
  return (
     <>
     <h1>image</h1>
    <div className='container'>
      <Card style={{ width: '18rem' }} className='tag'>
      <Card.Img variant="top" src="./images/17.webp" />
      <Card.Body>
        <Card.Title></Card.Title>
        <Card.Text>
        EXOTIC MIX – GRANDE CUBO FROM 
        RS. 6,000
        </Card.Text>
      </Card.Body>
    </Card>
      
    <Card style={{ width: '18rem' }} className='tag'>
      <Card.Img variant="top" src="./images/37.webp" />
      <Card.Body>
        <Card.Title></Card.Title>
        <Card.Text>
        VIBRANT GYPSOS – OCTAGONAL PETITE
        FROM RS. 2,250
        </Card.Text>
      </Card.Body>
    </Card>
      
    <Card style={{ width: '18rem' }} className='tag'>
      <Card.Img variant="top" src="./images/35.webp" />
      <Card.Body>
        <Card.Title></Card.Title>
        <Card.Text>
        SUNRISE BLOOM – OCTAGONAL MIDI
        RS. 4,000
        </Card.Text>
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem' }} className='tag'>
      <Card.Img variant="top" src="./images/18.webp" />
      <Card.Body>
        <Card.Title></Card.Title>
        <Card.Text>
        LILIES – CLASSIC CUBO
        FROM RS. 2,500
        </Card.Text>
      </Card.Body>
    </Card>

    
    </div>

      
</>
  
  )
}

export default Imagetag



