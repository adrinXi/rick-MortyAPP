import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'
import CardResident from './components/CardResident'
import ErrorScreen from './components/ErrorScreen'
import FilterList from './components/FilterList'
import LocationInfos from './components/LocationInfos'
import getRandomNumber from './utils/getRandomNumber'

function App() {
  // para guardar la informacion de la location
  const [location, setLocation] = useState()
  // para guardar la informacion del input y hacer la peticion cuando se hace submit
  const [searchInput, setSearchInput] = useState('')
  // para guardar las sugerencias de la API
  const [suggestedList, setSuggestedList] = useState()
  // para el manejo de errores, indica si hay error o no
  const [hasError, setHasError] = useState(false)

  useEffect(() => {
    let id = getRandomNumber()
    if (searchInput) {
      id = searchInput
    }

    const URL = `https://rickandmortyapi.com/api/location/${id}`

    axios.get(URL)
      .then(res => {
        setHasError(false)
        setLocation(res.data)
      })
      .catch(err => setHasError(true))
  }, [searchInput])

  const handleSubmit = e => {
    e.preventDefault()
    setSearchInput(e.target.idLocation.value)
  }

  const handleChange = ev => {
    if (ev.target.value === '') {
      return setSuggestedList()
    }

    const URL = `https://rickandmortyapi.com/api/location?name=${ev.target.value}`

    axios.get(URL)
      .then(res => setSuggestedList(res.data.results))
      .catch(err => console.log(err))
  }

  return (
    <div className="App">
      <header className='app__header'>
        <img className='app__title' src="../image/image 2.png" alt="title" />
      </header>
      <form className='submit__enter' onSubmit={handleSubmit}>
        <input
          id='idLocation'
          placeholder='Enter anyway number 1 to 126'
          type="text"
          onChange={handleChange}
        />
        <button>Search</button>
        <FilterList
          suggestedList={suggestedList}
          setSearchInput={setSearchInput}
        />
      </form>
      {
        hasError ?
          <ErrorScreen /> :
          <>
            <LocationInfos
              location={location}
            />
            <div className='card-container'>
              {
                location?.residents.map(url => (
                  <CardResident
                    key={url}
                    url={url}
                  />
                ))
              }
            </div>
          </>
      }
    </div>
  )
}

export default App
