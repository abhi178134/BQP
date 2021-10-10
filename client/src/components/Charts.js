import React,{useEffect, useState} from "react";
import {Bar} from 'react-chartjs-2';
import axios from "axios";
import Spinner from "./Spinner";

const Charts = () => {
    const[loading,setLoading]=useState(true);
    const[res,setRes]=useState([]);
    const margin = {top: 20, right: 20, bottom: 30, left: 40};
    const[states,setStates]=useState([]);
    const[freq,setFreq]=useState([]);
    
    useEffect(()=>{
        axios.get('http://127.0.0.1:8000/api/applicants/')
        .then(res => {
        setRes(res.data);
        var state = res.data.map(item=>item.state);
        setStates(state);
        var count = res.data.map(item=>item.count);
        setFreq(count);
        setLoading(false);
        })
        .catch((error) => {
        console.log(error);
        })
    },[]);

    const properties = {
        labels : states,
        datasets: [
            {
                label: 'State-wise Applicants',
                backgroundColor: 'rgba(75,192,192,1)',
                borderColor: 'rgba(0,0,0,0)',
                borderWidth: 2,
                data: freq
            }
        ]
    }
    return(
        <>
        {
            loading
            ?
            <Spinner />
            :
            <div className="chart-container">
            <center style={{paddingTop:'50px',color:'#707070'}}><h1>'State-Wise Applicants'</h1></center>
            <Bar
                data={properties}        
            />
    
            </div>

        }
 
        </>
    );
}
export default Charts;
