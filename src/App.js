import React from 'react';
import InstagramLogin from 'react-instagram-login' // Librery necessary, install by: yarn add react-instagram-login.
import './App.css';

const responseInstagram = response => {
  console.log(response)
}

function App() {
  return (
     <div className="App">
      <header className="App-header">
        <InstagramLogin
          clientId="d0162fe73c424b9ab3d742f95526d98d" // Instagram Developer id.
          buttonText={
          <div>
            <img src="/images/logo.svg" /> {/* Instagram image */}
          </div>
        }
          onSuccess={responseInstagram}
          onFailure={responseInstagram}
        />
      </header>
    </div>
  );
}

export default App;
