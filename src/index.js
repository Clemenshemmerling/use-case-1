import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  GoogleReCaptchaProvider,
} from 'react-google-recaptcha-v3';

ReactDOM.render(
  <GoogleReCaptchaProvider reCaptchaKey="6LdJo-8bAAAAAOhvdmLufi156dWtlVRd04L_uPVe">
    <App />
  </GoogleReCaptchaProvider>,
  document.getElementById('root')
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
