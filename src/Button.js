import Button from 'react-bootstrap/Button';
import React from 'react';
import './Button.css';

function Active() {
  return (
    <div className='contenedor'>
      <Button variant="primary" size="lg" active>
        Add
      </Button>{' '}
      
      <Button variant="secondary" size="lg" active>
        Cancel
      </Button>
    </div>
  );
}

export default Active;