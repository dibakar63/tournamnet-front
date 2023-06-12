import React, { useEffect, useState } from 'react'
import axios from 'axios';
import './Tournament.css'
import Tournament from './Tournamnet';


const URL='https://mern-back-z0vg.onrender.com/tournaments'
const fetchHandler=async()=>{
   return await axios.get(URL).then((res)=>res.data);
}
const Tournaments = () => {
    const [tournaments,setTournaments]=useState('');
    useEffect(()=>{
       fetchHandler().then((data)=>setTournaments(data.tournaments));
       console.log(tournaments);
    },[])
  return (
    <div>
      <ul>{tournaments && tournaments.map((tournament,i)=>
        <div className='tournament' key={i}>
            <Tournament tournament={tournament}/>
        </div>
      )}</ul>
    </div>
  )
}

export default Tournaments
