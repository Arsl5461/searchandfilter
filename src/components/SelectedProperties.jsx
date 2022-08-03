import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Table from 'react-bootstrap/Table';

function SelectedProperties() {
  return (
    <Container className="w-50">
      <Row>
       <Row>
        <Col className="lead">Selected Properties</Col>
      </Row>
        <Col className='mt-2'>
        <Table  responsive>
      <thead className='bg-secondary'>
        <tr>
          <th>Address</th>
          <th>Postcode</th>
          <th>No. Of Rooms</th>
          <th>Floor area(m)</th>
        </tr>
      </thead>
      <tbody>
        <tr >
          <td>Stenstrabe12</td>
          <td>20095</td>
          <td>5</td>
          <td>63</td>
        </tr>
        <tr>
          <td>Himmelstrabe12</td>
          <td>22299</td>
          <td>3</td>
          <td>22</td>
        </tr>
      </tbody>
    </Table>
        </Col>
      </Row>
    </Container>
  )
}

export default SelectedProperties