// Onboarding.js
import React from 'react';
import style from './Index.module.css';

const test = () => {
    return (
      <div className={style.onboarding_container}>
        {/* Chat interface */}
        <div className={style.chat_container}>
          <div className={style.chat_message}>Welcome to our app!</div>
          <div className={style.chat_message}>How can I help you?</div>
          {/* Add more chat messages here */}
        </div>
      </div>
    );
  };
  

export default test;
