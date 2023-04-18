import { useState } from 'react';
import getJoke from '../api/jokeData';
import Joker from '../components/JokeGenerator';

function Home() {
  const [bttnText, setBttnText] = useState('Get A Joke'); // eslint-disable-line
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

    setBttnText('Get Punchline');
  };

  return (
    <>
      <Joker joke={joke} getAJoke={getAJoke} bttnText={bttnText} setBttnText={setBttnText} />
    </>
  );
}

export default Home;
