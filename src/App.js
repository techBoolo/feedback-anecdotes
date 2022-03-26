import { useState } from 'react'
import Statistics from './components/Statistics.js'
import Button from './components/Button.js'
import Anecdote from './components/Anecdote.js'
import { anecdotes } from './data/anecdotes.js'

const App = () => {
  const [ state, setState ] = useState({ good: 0, neutral: 0, bad: 0 })
  const [ anecdotState, setAnecdotState ] = useState(anecdotes)
  const [ selected, setSelected ] = useState(Math.floor(Math.random() * anecdotes.length))

  const handleGood = (ev) => {
    setState(prevState => ({ ...prevState, good: prevState.good + 1}))
  }
  const handleNeutral = (ev) => {
    setState(prevState => ({ ...prevState, neutral: prevState.neutral + 1}))
  }
  const handleBad = (ev) => {
    setState(prevState => ({ ...prevState, bad: prevState.bad + 1}))
  }

  const handleAnecdotSelect = () => {
    setSelected(Math.floor(Math.random() * anecdotes.length))
  }
  const handleAnecdotVote = () => {
    let currentAnecdotState = { ...anecdotState[selected], vote: anecdotState[selected].vote + 1  }
    let anecState = [...anecdotState]
    anecState.splice(selected, 1, currentAnecdotState)
    setAnecdotState(anecState) 
  }

  const mostVoteAnecdot = () => {
    let voteArray = []
    anecdotState.forEach(state => {
      voteArray.push(state.vote)
    })
    const maxVote = Math.max(...voteArray)
    const maxVoteAnecdot = anecdotState.find(state => state.vote === maxVote)
    return maxVoteAnecdot
  }

  return (
    <div style={{ margin: '15px'}}>
      <h4 style={{ textDecoration: 'underline' }}>Your feedback</h4>
      <Button handler={handleGood} text='good' />
      <Button handler={handleNeutral} text='neutral' />
      <Button handler={handleBad} text='bad' />
      <h4 style={{ textDecoration: 'underline'}}>Statistics</h4>
      <Statistics state={state}/>

      <h4 style={{ textDecoration: 'underline'}}>Software engineering anecdotes</h4>
      <Anecdote anecdote={anecdotState[selected].anecdote} vote={anecdotState[selected].vote}/>     
      <Button handler={handleAnecdotVote} text='vote' />
      <Button handler={handleAnecdotSelect} text='next anecdote' />

      <h4 style={{ textDecoration: 'underline'}}>Anecdote with most votes</h4>
      <Anecdote anecdote={mostVoteAnecdot().anecdote} vote={mostVoteAnecdot().vote} />
    </div>
  );
}

export default App;
