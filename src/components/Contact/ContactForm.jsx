import React from 'react';
import PropTypes from 'prop-types';
import { useForm, ValidationError } from '@formspree/react';
import { FaHandshake, FaHandPointer } from 'react-icons/fa';
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
      <h3 className="contact-support-text">
        Please feel free to get in touch
        {' '}
        <FaHandPointer className="hand-pointer" />
      </h3>
      <div className="form-item">
        <label htmlFor="email">Your email:</label>
        <input id="email" type="email" name="email" />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
      </div>
      <div className="form-item">
        <label htmlFor="message">Your Message:</label>
        <textarea rows={10} id="message" name="message" />
        <ValidationError prefix="Message" field="message" errors={state.errors} />
      </div>
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
