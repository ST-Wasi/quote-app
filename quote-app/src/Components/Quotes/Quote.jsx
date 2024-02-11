import  axios  from 'axios';
import { useNavigate } from "react-router-dom";
import React from 'react'

function Quote(props) {
  const navigate = useNavigate();
  const handleClick = async (e) => {
    e.preventDefault();
      await axios.get(`http://localhost:8080/quote/${props.id}`).then((res)=>{
        navigate(`/quote/${props.id}`)
    })
  }

  return (
    <li>
      <span>
        <h1 className='font-extrabold text-2xl'>{props.author}</h1>
        <h3>{props.quote}</h3>
      </span>
      <button onClick={handleClick} className='border first-letter:rounded-e-full'>View This</button>
    </li>
  )
}

export default Quote
