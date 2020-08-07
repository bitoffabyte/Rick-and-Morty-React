import React from 'react'

const CharacterItem = (item) => {
    const it = item.item
    // console.log(it)
    return (
        <div className='card'>
            <div className='card-inner'>
                <div className='card-front'>
                    <img src={it.image} alt='' />
                </div>
                <div className='card-back'>
                    <h1>{it.name}</h1>
                    <ul>
                        <li>
                            <strong>Actor Name:</strong> {it.name}
                        </li>
                        <li>
                            <strong>Species:</strong> {it.species}
                        </li>
                        <li>
                            <strong>Gender:</strong> {it.gender}
                        </li>
                        <li>
                            <strong>Status:</strong> {it.status}
                        </li>
                        <li>
                            <strong>Origin:</strong> {it.origin.name}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default CharacterItem
