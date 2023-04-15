import { useState } from 'react';
import getJoke from '../api/jokeData';
import Joker from '../components/JokeGenerator';

function Home() {
  const [bttnText, setBttnText] = useState('Get A Joke');
  const [joke, setJoke] = useState({});

  const getAJoke = () => {
    getJoke().then((jokeObjct) => {
      setJoke(
        {
          setup: jokeObjct.setup,
          punchline: jokeObjct.delivery,
        },
      );
    });
  };

  return (
    <>
      <h1>{joke.setup}</h1>
      <h2>{joke.punchline}</h2>
      <button type="button" onClick={getAJoke}>{bttnText}</button>
      <Joker joke={joke} bttnText={bttnText} />
    </>
  );
}

export default Home;
