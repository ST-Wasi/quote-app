import axios from 'axios';
import React, { useRef } from 'react'

function Newquote() {
    let authorInputRef = useRef();
    let quoteInputRef = useRef();

    const handleSubmit = async (e) => {
        e.preventDefault();
        let quoteInp = quoteInputRef.current.value;
        let authorInp = authorInputRef.current.value;
        try {
            await axios.post('http://localhost:8080/quotes/new',
            {
                author: authorInp,
                quote: quoteInp
            }).then((res)=>{
                console.log(res.data);
            });
            quoteInputRef.current.value = ""
            authorInputRef.current.value = ""
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div>
            <h1>New Quote page</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="author"></label>
                    <input type="text" name='author' id='author' placeholder='Enter Author Name' ref={authorInputRef} />

                </div>
                <div>
                    <label htmlFor="quote"></label>
                    <textarea cols={30} rows={4} id='quote' placeholder='Enter Quote' ref={quoteInputRef} />

                </div>

                <button type='submit'>Add Quote</button>
            </form>
        </div>
    )
}

export default Newquote
