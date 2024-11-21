import {useState} from 'react'
import {format} from 'date-fns'
import AppointmentItem from '../AppointmentItem'
import './index.css'

function Appointments() {
  const [title, setTitle] = useState('')
  const [date, setDate] = useState('')
  const [appointments, setAppointments] = useState([])
  const [showStarred, setShowStarred] = useState(false)

  const handleAddAppointment = () => {
    if (title && date) {
      const formattedDate = format(new Date(date), 'dd MMMM yyyy, EEEE')
      const newAppointment = {
        id: Date.now(), // Unique key
        title,
        date: formattedDate,
        isStarred: false,
      }
      setAppointments([...appointments, newAppointment])
      setTitle('') // Reset input
      setDate('') // Reset date
    }
  }

  const toggleStarredFilter = () => {
    setShowStarred(!showStarred)
  }

  const toggleStarredStatus = id => {
    setAppointments(prevAppointments =>
      prevAppointments.map(appointment =>
        appointment.id === id
          ? {...appointment, isStarred: !appointment.isStarred}
          : appointment,
      ),
    )
  }

  const filteredAppointments = showStarred
    ? appointments.filter(appointment => appointment.isStarred)
    : appointments

  return (
    <div className="bg-container">
      <div className="container">
        <div className="row-container">
          <div className="text-container">
            <h1 className="heading">Add Appointment</h1>
            <div>
              <label htmlFor="title" className="label-design">
                TITLE
              </label>
              <input
                id="title"
                type="text"
                placeholder="Title"
                value={title}
                onChange={e => setTitle(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="date" className="label-design">
                DATE
              </label>
              <input
                id="date"
                type="date"
                value={date}
                onChange={e => setDate(e.target.value)}
              />
            </div>
            <button type="button" onClick={handleAddAppointment}>
              Add
            </button>
          </div>
          <div className="image-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/appointments-app/appointments-img.png"
              alt="appointments"
              className="appointments-image"
            />
          </div>
        </div>
        <div className="appointments">
          <h1>Appointments</h1>
          <button
            type="button"
            onClick={toggleStarredFilter}
            className={`star-filter-button ${showStarred ? 'active' : ''}`}
          >
            Starred
          </button>
        </div>
        <ul className="appointments-list">
          {filteredAppointments.map(appointment => (
            <AppointmentItem
              key={appointment.id}
              appointment={appointment}
              toggleStarredStatus={toggleStarredStatus}
            />
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Appointments
