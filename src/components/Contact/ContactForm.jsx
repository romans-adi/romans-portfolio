import React from 'react';
import PropTypes from 'prop-types';
import { useForm, ValidationError } from '@formspree/react';
import { FaHandshake } from 'react-icons/fa';
import './Contact.scss';

function ContactForm({ onSubmit }) {
  const [state, handleSubmit] = useForm('mrgvygkr');

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    if (await handleSubmit(e)) {
      onSubmit();
    }
  };

  if (state.succeeded) {
    return (
      <div className="submit-success-message">
        <div>
          <FaHandshake style={{ color: '#1b917d', fontSize: '5rem' }} />
        </div>
        <p>Thanks for your message!</p>
        <hr className="short-horizontal-rule" />
        <br />
        <p>I will contact you back as soon as possible!</p>
      </div>
    );
  }

  return (
    <form id="contact-form" onSubmit={handleFormSubmit}>
      <label htmlFor="email">Your email:</label>
      <input id="email" type="email" name="email" />
      <ValidationError prefix="Email" field="email" errors={state.errors} />

      <label htmlFor="message">Your Message:</label>
      <textarea rows={6} id="message" name="message" />
      <ValidationError prefix="Message" field="message" errors={state.errors} />

      <button className="contact-submit" type="submit" disabled={state.submitting}>
        Submit
      </button>
    </form>
  );
}

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default ContactForm;
