// map.jsx
import React from 'react';

export default function Search() {
  const iframeStyle = {
    width: '100%',
    height: '300px',
    border: '0',
    scrolling: 'no',
    marginHeight: '0',
    marginWidth: '0',
    
  };

  return (
    <div>
      <div style={{ width: '100%' }}>
        <iframe
          title="Google Maps"
          width="100%"
          height="300"
          frameBorder="0"
          style={iframeStyle}
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2310052.4732112744!2d75.5157610684085!3d20.751799094161946!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398e3e2d921882a5%3A0x71b57ec800a1de5d!2sIndia!5e0!3m2!1sen!2sus!4v1640219251065!5m2!1sen!2sus"
        >
          <a href="https://www.maps.ie/population/">Find the hotels on the map</a>
        </iframe>
      </div>
    </div>
  );
}
