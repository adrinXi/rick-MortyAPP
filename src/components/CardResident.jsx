import axios from 'axios'
import React, { useEffect, useState } from 'react'
import '../components/styles/cardResident.css'

const CardResident = ({url}) => {
    const [resident, setResident] = useState()

    useEffect(() => {
        axios.get(url)
            .then(res => setResident(res.data))
            .catch(err => console.log(err))
    }, [])

    return (
        <article className='card'>
            <header className='card__header'>
                <img className='card__img' src={resident?.image} alt="img" />
                <div className='card__container-status'>
                    <div className={`card__circle-status ${resident?.status}`}></div>
                    <span className='card__status'>{resident?.status}</span>
                </div>
            </header>
            <section className='card__body'>
                <h3 className='card_name'>{resident?.name}</h3>
                <hr />
                <ul className='card__list'>
                    <li className='card__item'>Raza<span className='card__span'>{resident?.species}</span></li>
                    <li className='card__item'>Origen<span className='card__span'>{resident?.origin.name}</span></li>
                    <li className='card__item'>Apariciones<span className='card__span'>{resident?.episode.length}</span></li>
                </ul>
            </section>
        </article>
    )
}

export default CardResident