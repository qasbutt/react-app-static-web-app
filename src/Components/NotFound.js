import React from 'react';
import errorImage from '../images/404.jpg';

const Error404 = () => {
  const containerStyle = {
    position: 'relative',
    textAlign: 'center',
    color: 'white', // Text color for contrast
  };

  const textStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: '20px',
  };

  const imageStyle = {
    width: '100%',
    height: 'auto',
  };

  return (
    <div style={containerStyle}>
      <img src={errorImage} alt="404 Error" style={imageStyle} />
      <div style={textStyle}>
        <h1>404 - Page Not Found</h1>
        <p>The page you are looking for does not exist.</p>
      </div>
    </div>
  );
}

export default Error404;