import React from 'react'
import { Helmet } from 'react-helmet'
import Main from './Components/Main';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'

function App() {
  const [pokemon, setPokemon] = React.useState('')
  return (
    <React.Fragment>
      <Helmet>
        {pokemon ? <title>Poke | {pokemon}</title> : <title>Pokemon Stats</title>}
      </Helmet>
      <Main pokemon={pokemon} setPokemon={setPokemon} />
    </React.Fragment>
  );
}

export default App;
