import StatisticLine from './StatisticLine.js'

const Statistics = (props) => {
  const { state }  = props

  let total = state.good + state.neutral + state.bad
  if(total === 0) {
    return <p>No feedback yet</p>
  }
  return (
    <>
      <div>
        <StatisticLine text='Good' value={state.good} />
        <StatisticLine text='Neutral' value={state.neutral} />
        <StatisticLine text='Bad' value={state.bad} />
        <StatisticLine text='Total feedback' value={total} />
        <StatisticLine text='Average feedback' value={((state.bad * -1) + (state.neutral * 0) + (state.good * 1)) / total || 0} />
        <StatisticLine text='Positive feedback' value={state.good / total || 0} />
      </div> 
    </>
  );
};

export default Statistics

