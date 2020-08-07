import React, { useState } from 'react'

const Search = (props) => {
    const [text, setText] = useState('')
    const getQ = (q) => {
        setText(q)
        props.getQuery(q)
    }
    return (
        <section className="search">
            <form>
                <input
                    type='text'
                    className="form-control"
                    placeholder="Search Characters"
                    autoFocus
                    onChange={(e) => getQ(e.target.value)}
                />
            </form>
        </section>
    )
}

export default Search
