import React,{useEffect,useState} from "react";
import Spinner from './Spinner';
import axios from "axios";
import {Table} from 'react-bootstrap';

const View = () => {
  const [res,setRes] = useState([]);
  const[loading,setLoading] = useState(true);
 
 
  useEffect(()=>{
    setLoading(true);
    axios.get('http://127.0.0.1:8000/api/applicants')
    .then(res => {
      setRes(res.data);
      console.log(res);
      setLoading(false);
    })
    .catch((error) => {
      console.log(error);
    })
  },[])

return (
  <>
  {
      loading
      ?
      <Spinner/>
      :
      <Table striped bordered responsive hover variant="dark">
    <thead>
        <tr>
        <th>RegNo</th>
        <th>Name</th>
        <th>State</th>
        </tr>
    </thead>
    <tbody>
        {!loading && res.map(doc =>
            <tr key = {doc.id}>
                <td>{doc.regno}</td>
                <td>{doc.name}</td>
                <td>{doc.state}</td>
            </tr>
        )}
    </tbody>
  </Table>
  }
  </>
  );
}

export default View;

//Features to add
//Add Grid for all the available events along with two buttons Update & Delete 
// Update will take back to prefilled form where user can update existing event
// Delete pop up a warning & then deletes accordingly....