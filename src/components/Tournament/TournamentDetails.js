
  import axios from "axios";
  import React, { useEffect, useState } from "react";
  import { useNavigate, useParams } from "react-router-dom";
  
  const TournamentDetails = () => {
    const [name, setName] = useState();
    const [img, setImage] = useState();
    const [start, setStart] = useState();
    const [end, setEnd] = useState();
    const [list, setList] = useState();
    const [status, setStatus] = useState();
    const [tournament,setTournaments]=useState()
    
    const id = useParams().id;
   // const [checked, setChecked] = useState(false);
    const history = useNavigate();
    
  
    const sendRequest = async () => {
      await axios
        .put(`https://mern-back-z0vg.onrender.com/tournaments/${id}`, {
          name,
          start,
          end,
          img,
          list,
          status
        })
        .then((res) => res.data);
    };
    const handleSubmit = (e) => {
      e.preventDefault();
      sendRequest().then(() => history("/tournaments"));
    };
    
  
    return (
      <div>
        
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
  
  <button type="submit" className="btn btn-primary">Update</button>
  
</form>
      </div>
    );
  };
  
  export default TournamentDetails;