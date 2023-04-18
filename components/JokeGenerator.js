import PropTypes from 'prop-types';

export default function Joker({
  joke, bttnText, getAJoke, setBttnText,
}) {
  return (
    <>
      <h1>{joke.setup}</h1>
      { bttnText === 'Get A Joke' || bttnText === 'Get A New Joke' ? (
        <button type="button" onClick={getAJoke}>{bttnText}</button>
      ) : (
        <>
          {bttnText !== 'Get A Punchline' ? <h1>{joke.punchline}</h1> : null}
          <button type="button" onClick={() => setBttnText('Get A New Joke')}>{bttnText}</button>
        </>
      )}
    </>
  );
}

Joker.propTypes = {
  joke: PropTypes.shape({
    setup: PropTypes.string,
    punchline: PropTypes.string,
  }),
  getAJoke: PropTypes.func.isRequired,
  bttnText: PropTypes.string,
  setBttnText: PropTypes.func.isRequired,
};

Joker.defaultProps = {
  joke: {
    setup: 'Default Setup',
    punchline: 'Default Punchline',
  },
  bttnText: 'Get A Joke',
};
