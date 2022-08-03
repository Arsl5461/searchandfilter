import {useState} from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import SearchProperties from './SearchProperties';
import SelectedProperties from "./SelectedProperties"
import Data from "../Data"
function SearchBar() {
    const [query,setQuery]=useState(" ")
    const [data,setData]=useState(Data)
    const search=(data)=>{
      return(
data.filter((item)=>item.Address.toLowerCase().includes(query))    
)}
  return (
    <>
    <Container className='w-50'>
       <Row>
        <Col className="lead">Search</Col>
      </Row>
      <Row>
        <Col className='mt-2'>
        <InputGroup className="mb-3" onChange={(e)=>setQuery(e.target.value)}>
        <Form.Control
          placeholder="Search Address"
        />
        <Button className="bg-warning" id="button-addon2">
          Search
        </Button>
      </InputGroup>
        </Col>
      </Row>
    </Container>
    <SelectedProperties/>
      <SearchProperties search={search(data)}/>
      </>
  )
}

export default SearchBar