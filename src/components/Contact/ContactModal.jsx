import { FaHandshake } from 'react-icons/fa';
import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import PropTypes from 'prop-types';
import ContactForm from './ContactForm';
import './Contact.scss';

Modal.setAppElement('#root');

const ContactModal = ({ isOpen, onRequestClose }) => {
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    let timer;

    if (submitted) {
      timer = setTimeout(() => {
        onRequestClose();
      }, 5000);
    }

    return () => clearTimeout(timer);
  }, [submitted, onRequestClose]);

  const handleSubmit = () => {
    setSubmitted(true);
  };

  return (
    <Modal
      id="contact-modal"
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Contact Modal"
    >
      <div className={`modal-content${submitted ? ' submitted' : ''}`}>
        <div className="modal-header">
          {submitted ? (
            <div className="success-icon">
              <FaHandshake style={{ color: '#1b917d', fontSize: '5rem' }} />
            </div>
          ) : null}
          <button type="button" className="close-modal" onClick={onRequestClose}>
            &times;
          </button>
        </div>
        <div className="modal-inner">
          {!submitted ? (
            <ContactForm onSubmit={handleSubmit} />
          ) : (
            <div>
              <p className="submit-success-message">
                Thanks for your message!
                <br />
                I will contact you back as soon as possible!
              </p>
            </div>
          )}
        </div>
      </div>
    </Modal>
  );
};

ContactModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onRequestClose: PropTypes.func.isRequired,
};

export default ContactModal;
