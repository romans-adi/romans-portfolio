/* eslint-disable no-plusplus */
import React, { useEffect, useState } from 'react';

const TypingComponent = () => {
  const [greeting, setGreeting] = useState('');
  const [name, setName] = useState('');
  const [profession, setProfession] = useState('');
  const greetingText = 'Good day.';
  const nameText = 'My name is Romans.';
  const professionText = 'I engineer web solutions.';
  const typingSpeed = 80;

  useEffect(() => {
    let greetingIndex = 0;
    let nameIndex = 0;
    let professionIndex = 0;

    const typingInterval = setInterval(() => {
      if (greetingIndex < greetingText.length) {
        setGreeting(greetingText.slice(0, greetingIndex + 1));
        greetingIndex++;
      } else if (nameIndex < nameText.length) {
        setName(nameText.slice(0, nameIndex + 1));
        nameIndex++;
      } else if (professionIndex < professionText.length) {
        setProfession(professionText.slice(0, professionIndex + 1));
        professionIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, typingSpeed);

    return () => {
      clearInterval(typingInterval);
    };
  }, []);

  return (
    <div>
      <h3 className="portfolio-heading">
        {greeting}
        <br />
        {' '}
        <span className="greeting">{name}</span>
        <br />
        {' '}
        <span className="portfolio-support">{profession}</span>
      </h3>
    </div>
  );
};

export default TypingComponent;
