import React from 'react'
import CharacterItem from "./CharacterItem"
import Spinner from "../Ui/Spinner"
const Characters = ({ chars, isLoading }) => {
    return isLoading ? (<Spinner />) : <section className="cards">
        {
            chars.results ? Object.entries(chars.results).map(i => (<CharacterItem key={i[0]} item={i[1]} />)) : null

        }
    </section >
}

export default Characters
