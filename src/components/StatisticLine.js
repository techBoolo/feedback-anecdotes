const StatisticLine = (props) => {
  const { text, value } = props

  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)'}}>
      <p style={{ margin: '6px 0'}}>{text}:</p>
      <p style={{ margin: '6px 0'}}>{value}</p>
    </div>
  );
};

export default StatisticLine
