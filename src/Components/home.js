import React from 'react';
import constructionImage from '../images/construction.png';

const Home = () => {
  const containerStyle = {
    position: 'relative',
    textAlign: 'center',
  };

  const textStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    color: 'white',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: '20px',
  };

  const imageStyle = {
    maxWidth: '100%',
    height: 'auto',
  };

  return (
    <div style={containerStyle}>
      <img src={constructionImage} alt="Under Construction" style={imageStyle} />
      <div style={textStyle}>
        <h1>Welcome to Our Website!</h1>
        <p>This is the homepage of our website built with React.js.</p>
        <p>Sorry for the inconvenience, but this page is currently under construction.</p>
      </div>
    </div>
  );
  }
  export default Home;