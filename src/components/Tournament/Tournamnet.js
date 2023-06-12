import { Button } from '@mui/material';
import React from 'react'
import image1 from '../../assets/ms-dhoni-photos3.jpg'
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const Tournament = (props) => {
    const {_id,name,image,start,end,list,status}=props.tournament;
    const history=useNavigate()
    const deleteHandler=async()=>{
        await axios.delete(`https://mern-back-z0vg.onrender.com/tournaments/${_id}`)
        .then((res)=>res.data)
        .then(()=>history('/tournaments'))
    }
  return (
    <div>
      <img src={image1} alt={_id}/>
      <h3>{name}</h3>
      <h3>Start-{start},End-{end}</h3>
      
      <h3>Player-list:{list}</h3>
      <h3>{status}</h3>
      <Link  to={`/updateTournaments/${_id}`}  sx={{mt:'auto'}}>Update</Link>
      <Button color='error' onClick={deleteHandler} sx={{mt:'auto'}}>Delete</Button>
    </div>
  )
}

export default Tournament
