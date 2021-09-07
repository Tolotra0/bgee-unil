import React from 'react';

const InfoIcon = ({ title, content }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <>
      <button
        type="button"
        className="button is-ghost"
        onClick={() => setIsOpen(true)}
      >
        <span className="icon">
          <ion-icon name="information-circle" size="large" />
        </span>
      </button>
      <div className={`modal ${isOpen ? 'is-active' : ''}`}>
        {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
        <div className="modal-background" onClick={() => setIsOpen(false)} />
        <div className="modal-card">
          {title && (
            <header className="modal-card-head">
              <p className="modal-card-title">{title}</p>
            </header>
          )}
          <section className="modal-card-body">{content}</section>
        </div>
      </div>
    </>
  );
};

export default InfoIcon;
