import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function PlayerRegistration(props) {
  const [isSignIn, setIsSignIn] = useState(true);

  const handleToggle = () => {
    setIsSignIn(!isSignIn);
  };

  function signUp(e) {
    e.preventDefault();

    const userName = document.getElementById("signUpuserName").value;
    const email = document.getElementById("signUpEmail").value;
    const password = document.getElementById("signUpPassword").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    const storedPlayer = localStorage.getItem(email);

    if (storedPlayer) {
      alert('User with this email already exists. Please sign in or use a different email.');
      return;
    }

    const newPlayer = { password: password, email: email, userName: userName, AllScores: [] };
    localStorage.setItem(email, JSON.stringify(newPlayer));
    props.addPlayerToTheGame(newPlayer);
  }

  function signIn(e) {
    e.preventDefault();

    const email = document.getElementById("signInEmail").value;
    const password = document.getElementById("signInPassword").value;

    const storedPlayer = localStorage.getItem(email);

    if (storedPlayer) {
      const parsedPlayer = JSON.parse(storedPlayer);

      if (parsedPlayer.password === password) {
        props.addPlayerToTheGame(parsedPlayer);
      } else {
        alert('One of the details is wrong');
      }
    } else {
      alert('User not found. Please sign up.');
    }

  }

  return (
    <div className="container">
      <button className="btn btn-primary" onClick={handleToggle}>
        {isSignIn ? 'SIGN UP' : 'SIGN IN'}
      </button>
      <section className="vh-100" style={{ backgroundColor: '#eee' }}>
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-lg-12 col-xl-11">
              <div className="card text-black" style={{ borderRadius: '25px' }}>
                <div className="card-body p-md-5">
                  <div className="row justify-content-center">
                    <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                      <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                        {isSignIn ? 'Sign In' : 'Sign up'}
                      </p>
                      <form className="mx-1 mx-md-4">
                        {!isSignIn ? (
                          <div>
                            <div className="d-flex flex-row align-items-center mb-4">
                              <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                              <div className="form-outline flex-fill mb-0">
                                <input type="text" id="signUpuserName" className="form-control" />
                                <label className="form-label" htmlFor="signUpuserName">
                                  Your Name
                                </label>
                              </div>
                            </div>
                          </div>
                        ) : null}
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                          {!isSignIn ? (<div className="form-outline flex-fill mb-0"> <input type="email" id="signUpEmail" className="form-control" />
                            <label className="form-label" htmlFor="signUpEmail">
                              Your Email
                            </label>
                          </div>) : (<div className="form-outline flex-fill mb-0"> <input type="email" id="signInEmail" className="form-control" />
                            <label className="form-label" htmlFor="signInEmail">
                              Your Email
                            </label>
                          </div>)
                          }
                        </div>
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                          {!isSignIn ? (<div className="form-outline flex-fill mb-0">
                            <input type="password" id="signUpPassword" className="form-control" />
                            <label className="form-label" htmlFor="signUpPassword">
                              Password
                            </label>
                          </div>) : (<div className="form-outline flex-fill mb-0">
                            <input type="password" id="signInPassword" className="form-control" />
                            <label className="form-label" htmlFor="signInPassword">
                              Password
                            </label>
                          </div>)}
                        </div>
                        {!isSignIn ? (
                          <>
                            <div className="d-flex flex-row align-items-center mb-4">
                              <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                              <div className="form-outline flex-fill mb-0">
                                <input type="password" id="confirmPassword" className="form-control" />
                                <label className="form-label" htmlFor="confirmPassword">
                                  Repeat your password
                                </label>
                              </div>
                            </div>
                            <div className="form-check d-flex justify-content-center mb-5">
                              <input
                                className="form-check-input me-2"
                                type="checkbox"
                                value=""
                                id="form2Example3c"
                              />
                              <label className="form-check-label" htmlFor="form2Example3">
                                I agree to all statements in <a href="#!">Terms of service</a>
                              </label>
                            </div>
                          </>
                        ) : null}

                        <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                          {isSignIn ? (
                            <button type="submit" onClick={signIn} className="btn btn-primary btn-lg">
                              Sign in
                            </button>
                          ) : (
                            <button type="submit" onClick={signUp} className="btn btn-primary btn-lg">
                              Register
                            </button>
                          )}
                        </div>
                      </form>
                    </div>
                    <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                      <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                        className="img-fluid"
                        alt="sign in sign up"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
export default PlayerRegistration