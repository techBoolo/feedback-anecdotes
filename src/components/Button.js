const Button = (props) => {

  const { text, handler } = props
  return (
    <button style={{ padding: '5px 15px', marginRight: '10px' }} onClick={handler}>
      { text } 
    </button>
  );
};

export default Button
