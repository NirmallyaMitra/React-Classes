import React from 'react'
import '../index.css'

const Card = (props) => {

  console.log(props);

  const onbadge = <><span className="badge-dot-green"></span>Online</>;
  const offbadge = <><span className="badge-dot-red"></span>Offline</>;
  

  return (
    <div className="card">

      <div className="card-top">
        <img
          className="doctor-photo"
          src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=300&q=80"
          alt="Dr. Putri Anggraheni - Primary care doctor portrait"
        />
        <div className="info">
          <div className="badge">
            {props.doctor.online == true ? onbadge : offbadge}
          </div>
          <h2 className="name">{props.doctor.name}</h2>
          <p className="specialty">{props.doctor.specialization}</p>

          <div className="rating-row">
            <svg className="star-icon" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            </svg>
            <span className="rating-num">{props.doctor.rating}</span>
            <span className="rating-count">({props.doctor.reviews})</span>
            <span className="dot-sep">•</span>
            <span className="distance">{props.doctor.distance}</span>
          </div>

          <a href="#" className="video-link">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17 10.5V7a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-3.5l4 4v-11l-4 4z"/>
            </svg>
            {props.doctor.videoVisit == true ? 'Provide video visit' : 'Don\'t Provide video visit'}
          </a>
        </div>
      </div>

      <div className="location-bar">
        <div className="loc-left">
          <svg className="loc-pin" viewBox="0 0 24 24" fill="none" stroke="#1d1d1f" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="10" r="3"/>
            <path d="M12 2C7.58 2 4 5.81 4 10.5c0 5.25 6 11.5 8 12s8-6.75 8-12C20 5.81 16.42 2 12 2z"/>
          </svg>
          {props.doctor.location}
        </div>
        <div className="loc-arrow-btn">
          <svg viewBox="0 0 24 24" fill="none" stroke="#1d1d1f" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </div>
      </div>

      <div className="dates">
        {props.doctor.appointments.map((Obj, idx) => (
          <div className="date-chip active">
            <span className="chip-date">{Obj.date}</span>
            <span className="chip-appts">{Obj.count} appts</span>
          </div>
        ))}
        {/* <div className="date-chip dimmed">
          <span className="chip-date">06 Dec</span>
          <span className="chip-appts">0 appts</span>
        </div>
        <div className="date-chip">
          <span className="chip-date">07 Dec</span>
          <span className="chip-appts">15 appts</span>
        </div>
        <div className="date-chip">
          <span className="chip-date">08 Dec</span>
          <span className="chip-appts">8 appts</span>
        </div> */}
      </div>

    </div>
  )
}

export default Card
