import React,{Fragment, useEffect, useState} from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import Quote from '../Quotes/Quote';

function QuoteShow() {
    const [quote, setQuote] = useState({
        author: "",
        quote: ""
    });
    const params = useParams();
    useEffect(() => {
        async function fetchQuotes(){
            await axios.get(`http://localhost:8080/quote/${params.id}`).then((res)=>{
               const {author, quote} = res.data;
               setQuote({author, quote});
            })
        }
        fetchQuotes();
    },[])

  return (
    <ul>
      <h2>{quote.author}</h2>
      <p>{quote.quote}</p>
    </ul>
  )
}

export default QuoteShow
