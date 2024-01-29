import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Blobs from './blobs.jpg';

const Home = () => {
  // back end
  const navigate = useNavigate();
  const [username, set_username] = useState('');
  const [password, set_password] = useState('');
  const [password3, set_password3] = useState('');

  const signup_data = async (e) => {
    e.preventDefault();
    const signup_retrieve = {
      user: username,
      pass: password,
      confirm_pass:password3
    };

    try {
      const response = await axios.post('/api/signup', signup_retrieve);
      if (response.status === 200) {
        window.location.reload();
        console.log('Sign Up Successful');
      } else if (response.status === 201) {
        console.log('Sign Up Unsuccessful');
      }
    } catch (error) {
      console.error('Error during axios.post', error);
    }
  };

  const [username2, set_username2] = useState('');
  const [password2, set_password2] = useState('');

  const signin_data = async (e) => {
    e.preventDefault();
    const signin_retrieve = {
      user: username2,
      pass: password2,
    };

    try {
      const response = await axios.post('/api/signin', signin_retrieve);

      if (response.status === 200) {
        const token = response.data.token;
        localStorage.setItem('token', token);
        navigate('/list');
      } else if (response.status === 201) {
        window.location.reload();
        console.log('Incorrect password');
      } else {
        console.log(`Unexpected response status: ${response.status}`);
      }
    } catch (error) {
      console.error('Error during axios.post', error);
    }
  };

  return (
    // html
    <div>
      <div id="blob-container">
        <img
          className="pointer-events-none bg-no-repeat fixed"
          id="blob"
          src={Blobs}
          alt="blob"
        />
      </div>
      
      <div>
        <div>
        <h2 className='font-mono text-8xl text-white z-20 absolute top-20 left-1/2 transform -translate-x-1/2 font-bold '>OIBSIP</h2>
          <div className="fixed bg-white bg-opacity-20 border border-white shadow-md rounded-3xl w-4/12 h-96 top-1/3 left-52 backdrop-blur-sm transition-all duration-300 ease-in-out hover:shadow-2xl">
            <form onSubmit={signup_data}>
              <input
                className="w-4/5 bg-transparent text-center mx-14 mt-8 text-4xl border-b-2 border-white focus:border-b-4 outline-none transition-all duration-300 ease-in-out text-white focus:text-5xl focus:w-4/5 placeholder-white"
                pattern="[a-z0-9]+"
                required
                type="text"
                placeholder="username"
                value={username}
                onChange={(e) => set_username(e.target.value)}
              />
              <br></br>
              <input
                className="w-4/5 bg-transparent text-center mx-14 mt-8 text-4xl border-b-2 border-white focus:border-b-4 outline-none transition-all duration-300 ease-in-out text-white focus:text-5xl focus:w-4/5 placeholder-white"
                id="passupbox"
                pattern="[a-z0-9]+"
                type="password"
                placeholder="password"
                value={password}
                onChange={(e) => set_password(e.target.value)}
                required
              />
              <br></br>
              <input
                className="w-4/5 bg-transparent text-center mx-14 mt-8 text-4xl border-b-2 border-white focus:border-b-4 outline-none transition-all duration-300 ease-in-out text-white focus:text-5xl focus:w-4/5 placeholder-white"
                id="passupbox3"
                pattern="[a-z0-9]+"
                type="password"
                placeholder="confirm password"
                value={password3}
                onChange={(e) => set_password3(e.target.value)}
                required
              />
              <br></br>
              <button
                id="signup-but"
                type="submit"
                className="mt-16 font-mono w-4/5 text-white text-4xl mx-16 text-center transition-all duration-300 ease-in-out text"
              >
                Sign Up
              </button>
            </form>
          </div>

          <div className="fixed bg-white bg-opacity-20 border border-white shadow-md rounded-3xl w-4/12 h-96 top-1/3 right-52 backdrop-blur-sm transition-all duration-300 ease-in-out hover:shadow-2xl">
            <form onSubmit={signin_data}>
              <input
                className="w-4/5 bg-transparent text-center mx-14 mt-16 text-4xl border-b-2 border-white focus:border-b-4 outline-none transition-all duration-300 ease-in-out text-white focus:text-5xl focus:w-4/5 placeholder-white"
                id="userinbox"
                pattern="[a-z0-9]+"
                type="text"
                placeholder="username"
                value={username2}
                onChange={(e) => set_username2(e.target.value)}
                required
              />
              <br></br>
              <input
                className="w-4/5 bg-transparent text-center mx-14 mt-8 text-4xl border-b-2 border-white focus:border-b-4 outline-none transition-all duration-300 ease-in-out text-white focus:text-5xl focus:w-4/5 placeholder-white"
                id="passinbox"
                pattern="[a-z0-9]+"
                type="password"
                placeholder="password"
                value={password2}
                onChange={(e) => set_password2(e.target.value)}
                required
              />
              <br></br>
              <button
                id="signin-but"
                type="submit"
                className="font-mono w-4/5 text-white text-4xl m-16 mt-28 text-center transition-all duration-300 ease-in-out text"
              >
                Sign In
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
