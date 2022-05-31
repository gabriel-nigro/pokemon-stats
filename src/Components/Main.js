import React from 'react'
import Form from './Form';
import Viewer from './Viewer';

const Main = ({ pokemon, setPokemon }) => {

  const [pokemonData, setPokemonData] = React.useState('');

  async function handleSubmit(event) {
    event.preventDefault()
    // fetch PokeAPI
    const response = await fetch('https://pokeapi.co/api/v2/pokemon/' + pokemon);
    const data = await response.json()
    setPokemonData(data)
  }

  return (
    <React.Fragment>
      <div className='container'>
        <section>
          <div className='row'>
            <h1 className='text-center'>Pokemon Stats</h1>
          </div>
          <div className='row'>
            <Form handleSubmit={handleSubmit} inputData={pokemon} setInputData={setPokemon} />
          </div>
        </section>
        {pokemonData ? (
          <section>
            <Viewer data={pokemonData} />
          </section>
        ) : null}
      </div>
    </React.Fragment>
  )
}

export default Main