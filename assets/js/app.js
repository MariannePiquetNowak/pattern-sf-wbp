import React, { useState, useEffect, Fragment } from 'react'
import ReactDOM from 'react-dom'
import '../styles/app.scss'
import Items from './Components/Items'

const App = () => {
  const [pokemons, setPokemons] = useState([]);
  

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=10')
      .then((response) => response.json())
      .then(data => setPokemons(data.results))
  }, [])

  return (
    <Fragment>
      <div className="row">
        {pokemons.map((e) => (
            <Items key={e.name} {...e}></Items>
        ))}
      </div>
    </Fragment>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
