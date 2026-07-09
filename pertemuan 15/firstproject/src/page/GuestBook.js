import React, { useState } from 'react';

function GuestBook() {
  const [guestName, setGuestName] = useState('');
  const [guests, setGuests] = useState([]);

  const handleInputChange = (event) => {
    setGuestName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (guestName.trim() !== '') {
      const currentTime = new Date().toLocaleString();
      const newGuest = { name: guestName, time: currentTime };
      
      setGuests([...guests, newGuest]);
      setGuestName('');
    }
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-4 text-secondary">Guest Book</h2>
      <form onSubmit={handleSubmit} className="d-flex mb-4">
        <input 
          type="text" 
          className="form-control me-2" 
          placeholder="Guest's Name" 
          value={guestName}
          onChange={handleInputChange}
        />
        <button type="submit" className="btn btn-success">Submit</button>
      </form>

      <ul className="list-group list-group-flush">
        {guests.map((guest, index) => (
          <li key={index} className="list-group-item d-flex align-items-center">
            <span className="badge bg-info text-dark me-3">{guest.time}</span> 
            {guest.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default GuestBook;