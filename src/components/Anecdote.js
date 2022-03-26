const Anecdote = ({ anecdote, vote }) => {

  return (
    <>
    <h2>
      { anecdote } 
    </h2>
    <p>has { vote } vote/s</p>
    </>
  );
};

export default Anecdote
