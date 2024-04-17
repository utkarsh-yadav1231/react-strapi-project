// EventList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { NewsHeaderCard } from 'react-ui-cards';
import '../App.css';

const EventList = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:1337/api/pepper-schools?populate=*')
      .then(response => {
        setEvents(response.data.data);
      })
      .catch(error => console.error('Error fetching events:', error));
  }, []);

  return (
    <div className="event-list">
      {events.map(event => {
        const imageUrl = `http://localhost:1337${event.attributes.eventImage.data.attributes.url}`;
        return (
          <div key={event.id} className="event-card">
            <NewsHeaderCard
              thumbnail={imageUrl}
              author={event.attributes.eventTitle}
              date={event.attributes.eventDate}
            />
          </div>
        );
      })}
    </div>
  );
};

export default EventList;
