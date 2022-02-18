import React, { useState, useEffect } from 'react'

const colours = {
  normal: '#A8A77A',
  fire: '#EE8130',
  water: '#6390F0',
  electric: '#F7D02C',
  grass: '#7AC74C',
  ice: '#96D9D6',
  fighting: '#C22E28',
  poison: '#A33EA1',
  ground: '#E2BF65',
  flying: '#A98FF3',
  psychic: '#F95587',
  bug: '#A6B91A',
  rock: '#B6A136',
  ghost: '#735797',
  dragon: '#6F35FC',
  dark: '#705746',
  steel: '#B7B7CE',
  fairy: '#D685AD',
}

const Items = (props) => {
  const [pokemon, setPokemon] = React.useState({})
  const [type, setType] = React.useState('')
  const [artwork, setArtwork] = React.useState('')
  const [abilities, setAbilities] = React.useState([])

  useEffect(() => {
    fetch(props.url)
      .then((res) => res.json())
      .then((data) => {
        setPokemon(data)
        setType(data.types[0].type.name)
        setAbilities(data.abilities)
        setArtwork(data.sprites.other['official-artwork'].front_default)
      })
  }, [])

  return (
    <div className="card col-md-4" style={{ width: 200 }}>
      <div className="card-body">
        <img className="pokemon-img" src={artwork} alt="" />
        <div>N° {String(pokemon.id).padStart(3, 0)}</div>
        <div>Nom: {pokemon.name}</div>
        <div>Poids: {pokemon.weight / 10} kgs</div>
      </div>
    </div>
  )
}
export default Items
