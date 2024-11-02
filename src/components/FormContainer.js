import React from 'react';

function FormContainer() {
  return (
    <div className="form-container">
      <h2>Callback Order Form</h2>
      <form>
        <input type="text" placeholder="Name" required />
        <input type="email" placeholder="Email" required />
        <input type="text" placeholder="Phone" required />
        <input type="text" placeholder="Profession" required />
        <button type="submit">Submit a question!</button>
      </form>
    </div>
  );
}

export default FormContainer;
