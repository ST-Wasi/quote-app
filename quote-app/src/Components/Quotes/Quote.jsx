import React from 'react'

function Quote(props) {
  return (
    <li>
      <span>
        <h1 className='font-extrabold text-2xl'>{props.author}</h1>
        <h3>{props.quote}</h3>
      </span>
      <button className='border first-letter:rounded-e-full'>View This</button>
    </li>
  )
}

export default Quote
