// EventCard.js
import React from 'react';

const EventCard = ({ event, imageUrl }) => {
  return (
    <div className="event-card">
      <img src={imageUrl} alt={event.eventTitle} className="event-image" />
      <div className="event-details">
        <h2>{event.eventTitle}</h2>
        <p>{event.eventDate}</p>
      </div>
    </div>
  );
};

export default EventCard;
