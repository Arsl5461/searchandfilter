import {useState} from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';
import Data from "../Data";
function SearchProperties({search}) {
    const [data,setData]=useState(Data)
   const filterResult=(catItem)=>{
    const result=data.filter((curData)=>{
      return curData.PropertyType === catItem
    })
    setData(result)
   }
  return (
    <>
    <Container>

      <Row>
        <Col sm={2}>
        <p className="lead">Property Type</p>
        <ul className='property'>
          <li onClick={()=>setData(Data)}>All</li>
          <li onClick={()=>filterResult("Flat")}>Flat</li>
          <li onClick={()=>filterResult("TerracedHouse")}>Teraced House</li>
          <li onClick={()=>filterResult("Semidetached")}>Semi-detached</li>

        </ul>
        </Col>
        <Col sm={8}>  
        <p className='lead'>Search Results</p>
        <Table  responsive  className="ml-5">
      <thead className='bg-secondary'>
        <tr>
          <th>Address</th>
          <th>Postcode</th>
          <th>Property Type</th>
          <th>No. Of Rooms</th>
          <th>Floor area(m)</th>
        </tr>
      </thead>
      <tbody>

        {search.map((data)=>
        
        <tr key={data.id}>
          <td>{data.Address}</td>
          <td>{data.PostCode}</td>
          <td>{data.PropertyType}</td>
          <td>{data.Rooms}</td>
          <td>{data.Area}</td>
        </tr>
        )}
        
        
      </tbody>
    </Table>
</Col>
</Row>
    </Container>
 
</>
  )
}

export default SearchProperties