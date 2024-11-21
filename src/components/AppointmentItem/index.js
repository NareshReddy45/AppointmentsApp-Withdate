import './index.css'

function AppointmentItem({appointment, toggleStarredStatus}) {
  return (
    <li className="appointment-item">
      <div className="appointment-heading-para">
        <p>{appointment.title}</p>
        <p>{appointment.date}</p>
      </div>
      <button
        className="star-button"
        onClick={() => toggleStarredStatus(appointment.id)}
        data-testid="star"
      >
        <img
          src={
            appointment.isStarred
              ? 'https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png'
              : 'https://assets.ccbp.in/frontend/react-js/appointments-app/star-img.png'
          }
          alt="star"
        />
      </button>
    </li>
  )
}

export default AppointmentItem
