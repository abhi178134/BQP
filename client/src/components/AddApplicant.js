import React,{useState} from "react";
import {Form,Row,Col,Button} from 'react-bootstrap';
import { useHistory } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";

const AddApplicant = () => {

    const [name,setName] = useState('');
    const [regNo,setRegNo] = useState(0);
    const [state,setState] = useState('');
    const history = useHistory();
    const myArray ={
        "AN": "Andaman and Nicobar Islands",
        "AP": "Andhra Pradesh",
        "AR": "Arunachal Pradesh",
        "AS": "Assam",
        "BR": "Bihar",
        "CG": "Chandigarh",
        "CH": "Chhattisgarh",
        "DH": "Dadra and Nagar Haveli",
        "DD": "Daman and Diu",
        "DL": "Delhi",
        "GA": "Goa",
        "GJ": "Gujarat",
        "HR": "Haryana",
        "HP": "Himachal Pradesh",
        "JK": "Jammu and Kashmir",
        "JH": "Jharkhand",
        "KA": "Karnataka",
        "KL": "Kerala",
        "LD": "Lakshadweep",
        "MP": "Madhya Pradesh",
        "MH": "Maharashtra",
        "MN": "Manipur",
        "ML": "Meghalaya",
        "MZ": "Mizoram",
        "NL": "Nagaland",
        "OR": "Odisha",
        "PY": "Puducherry",
        "PB": "Punjab",
        "RJ": "Rajasthan",
        "SK": "Sikkim",
        "TN": "Tamil Nadu",
        "TS": "Telangana",
        "TR": "Tripura",
        "UP": "Uttar Pradesh",
        "UK": "Uttarakhand",
        "WB": "West Bengal"
      };
    const states = Object.entries(myArray);
    
    const options = states.map((item) => {
        return (
        <option key={item[0]} value ={item[0]}>
            {item[0]}-{item[1]}
        </option>
        )
    });
    const handleShare = async () => {
        const applicantObject = {
            regno:regNo,
            name:name,
            state:state
        };
        axios.post('http://127.0.0.1:8000/api/applicants',applicantObject)
        .then(history.push('/view'));
        
    }
    return (
        <>
        <Form className = "form-style">
            <Row className = "mb-5 mt-5">
                <Col className = "text-center">
                <h2>
                    ADD APPLICANT
                </h2>
                </Col>
            </Row>
            <Form.Group className="mb-3">
                <Row>
                    <Col xs="4" >
                        <div style={{fontSize:'medium',fontWeight:'bold',marginLeft:'8vw'}}>
                            <Form.Label className="pl-5">Reg No.</Form.Label>
                        </div>
                    </Col>

                    <Col xs ="6">
                        <Form.Control onChange={(e)=>setRegNo(e.target.value)} type = "number" placeholder ="Reg No" />
                    </Col>
                </Row>
            </Form.Group>

            <Form.Group className="mb-3 ml-4">
                <Row>
                    <Col xs="4" >
                    <div style={{fontSize:'medium',fontWeight:'bold',marginLeft:'8vw'}}>
                        <Form.Label>Name</Form.Label>
                    </div>
                    </Col>
                    <Col xs ="6">
                       <Form.Control onChange={(e)=>setName(e.target.value)} type = "text" placeholder ="Name" />
                    </Col>
                </Row>
            </Form.Group>

            <Form.Group className="mb-3">
                <Row>
                    <Col xs="4">
                    <div style={{fontSize:'medium',fontWeight:'bold',marginLeft:'8vw'}}>
                        <Form.Label>State</Form.Label>
                    </div>
                    </Col>
                    <Col xs ="6">
                    <Form.Control as="select" onChange={(e)=>setState(e.target.value)} type = "select" className="form-select">
                        {options}
                    </Form.Control>
                    </Col>
                </Row>
            </Form.Group>
            <Row className="mb-5 mt-5">
                <Col className="text-center">
                    <Button className="btn-started" onClick={handleShare} type="button">
                    Share
                    </Button>
                </Col>
            </Row>
        </Form>
        </>
    )
}
export default AddApplicant;