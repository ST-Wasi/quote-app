import React, { useEffect, useState } from 'react'
import Quote from '../Quotes/Quote';
import axios from 'axios'

function Allquotes() {
    let [quotes, setQuotes] = useState([]);

    useEffect(() => {
        async function getQuotes() {
            await axios.get('http://localhost:8080/quotes').then((res) => {
                setQuotes(res.data)
            })
        }
        getQuotes();
    }, [])

    return (
        <div>
            <h1>All Quote Page</h1>
            <ul>
            {quotes && quotes.map((item, index) => (<Quote quote={item.quote} author={item.author} key={item._id} />))}
            </ul>
        </div>
    )
}

export default Allquotes
