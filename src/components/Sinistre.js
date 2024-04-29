import React, { useState } from 'react';
import "./sinistre.css";
import AddPhotoComponent from './AddPhotoComponent';
const SinistreForm = () => {
  const [dateSurvD, setDateSurvD] = useState('');
  const [heure, setHeure] = useState('');
  const [minute, setMinute] = useState('');
  const [postal, setPostal] = useState('');
  const [ville, setVille] = useState('');
  const [detailDommage, setDetailDommage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Description du sinistre</h3>
      <div className="form-desc">
      <div className="mat-form-field-infix">
      <input
        className="mat-input-element mat-form-field-autofill-control cdk-text-field-autofill-monitored ng-pristine ng-invalid ng-touched"
        formcontrolname="numPolice"
        placeholder="Placeholder"
        required
        id="mat-input-0"
        aria-invalid="true"
        aria-required="true"
        data-sider-insert-id="bc36ff5f-35ee-4214-a0f5-21e5b806c560"
        data-sider-select-id="3306a577-9666-425d-9059-769b12affa5d"
      />
      <span className="mat-form-field-label-wrapper">
        <label
          className="mat-form-field-label ng-tns-c7-0 mat-empty mat-form-field-empty ng-star-inserted"
          htmlFor="mat-input-0"
          aria-owns="mat-input-0"
        >
          <span className="ng-star-inserted">N° de police (xxx/xx/xxxxxxx)</span>
          <span className="mat-placeholder-required mat-form-field-required-marker ng-tns-c7-0 ng-star-inserted"> *</span>
        </label>
      </span>
    </div>

        <div className="ins-form-line__input">
          <input
            type="date"
            value={dateSurvD}
            onChange={(e) => setDateSurvD(e.target.value)}
            placeholder="Date de survenance"
            required
          />
        </div>
        <div className="ins-form-line__input">
          <select
            value={heure}
            onChange={(e) => setHeure(e.target.value)}
            placeholder="Heure"
            required
          >
            {/* Options for heure */}
          </select>
        </div>
        <div className="ins-form-line__input">
          <select
            value={minute}
            onChange={(e) => setMinute(e.target.value)}
            placeholder="Minute"
            required
          >
            {/* Options for minute */}
          </select>
        </div>
      </div>
      <div className="form-info">
        <div className="ins-form-line__input">
          <input
            type="text"
            value={postal}
            onChange={(e) => setPostal(e.target.value)}
            placeholder="Code Postal"
          />
        </div>
        <div className="ins-form-line__input">
          <input
            type="text"
            value={ville}
            onChange={(e) => setVille(e.target.value)}
            placeholder="Ville"
          />
        </div>
      </div>
      <div className="form-field">
        <textarea
          value={detailDommage}
          onChange={(e) => setDetailDommage(e.target.value)}
          placeholder="Détail des dommages"
          required
        />
      </div>
      <AddPhotoComponent/>
      <button className="submit-button" type="submit">Valider ma déclaration</button>
    </form>
  );
};

export default SinistreForm;
