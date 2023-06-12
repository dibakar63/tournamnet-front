import React, { useState } from 'react'
////import './auth.css'
//import Profile from './Profile'
//import './profile.css'

import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'
const AddTournamnet = () => {
    const [name,setName]=useState("");
    const [img,setImage]=useState("");
    const [start,setStart]=useState("");
    const [end,setEnd]=useState("");
    const [list,setList]=useState("");
    const [status,setStatus]=useState("");
     const navigate=useNavigate();
    const handleSubmit=async(e)=>{
        e.preventDefault();
        try {
          const res=await  axios.post('https://mern-back-z0vg.onrender.com/tournaments',{name,img,start,end,list,status})
          if( res && res.data.success){
            toast.success(res.message)
             navigate('/tournaments')
          }else{
            toast.error(res.data.message)
          }
        } catch (error) {
            console.log(error);
            toast.error('Something went wrong')
        }
    }
  return (
    <div>
      <div className='profile'>
        <h1>Register</h1>
        
        <form onSubmit={handleSubmit}>
  <div className="mb-3">
    
    <input type="name" className="form-control" id="exampleInputEmail1" placeholder='Enter your name' value={name} onChange={(e)=>setName(e.target.value)} required/>
    
    </div>
    <div className="mb-3">
    
    <input type="name" className="form-control" id="exampleInputEmail1" placeholder='Image Link' value={img} onChange={(e)=>setImage(e.target.value)} required/>
    
    </div>
  <div className="mb-3">
    
    <input type="text" className="form-control" id="exampleInputPassword1" placeholder='Enter Start date' value={start} onChange={(e)=>setStart(e.target.value)} required/>
  </div>
  <div className="mb-3">
    
    <input type="name" className="form-control" id="exampleInputEmail1" placeholder='End date'  value={end} onChange={(e)=>setEnd(e.target.value)} required />
       
    </div>
  <div className="mb-3">
    
    <input type="name" className="form-control" id="exampleInputEmail1" placeholder='List' value={list} onChange={(e)=>setList(e.target.value)} required/>
    
    </div>
    <div className="mb-3">
    
    <input type="name" className="form-control" id="exampleInputEmail1" placeholder='Satus'  value={status} onChange={(e)=>setStatus(e.target.value)} required />
       
    </div>
  
  <button type="submit" className="btn btn-primary">Submit</button>
  
</form>
</div>
      
    </div>
  )
}

export default AddTournamnet
