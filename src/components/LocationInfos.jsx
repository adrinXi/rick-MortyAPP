import React from 'react'
import '../components/styles/locationInf.css'

const LocationInfos = ({ location }) => {

    return (
        <article className='space__info'>
            <p className='space__name'><b>Name: </b>{location?.name}</p>
            <ul className='space__data-list'>
                <li className='space__data'><span>type: </span>{location?.type}</li>
                <li className='space__data'><span>dimension: </span>{location?.dimension}</li>
                <li className='space__data'><span>population: </span>{location?.residents.length}</li>
            </ul>
        </article>
    )
}

export default LocationInfos