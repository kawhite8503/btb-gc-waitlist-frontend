import { useState } from "react"

function AddService(props) {
  const [formData, setFormData] = useState({
    name: '',
    timeHrs: '',
    timeMins: ''
  })
  const handleChange = evt => {
    setFormData({ ...formData, [evt.target.name]: evt.target.value})
  }

	return (
		<>
			<h2>Add Service</h2>
			<form autoComplete="off">
				<div className="form-group mb-3">
					<label htmlFor="service-name-input" className="form-label">
						Service Name (required)
					</label>
					<input 
						type="text"
						className="form-control"
						id="service-name-input"
						name="name"
            value={formData.name}
            onChange={handleChange}
						required
					/>
				</div>
				<div className="form-group mb-3">
					<label htmlFor="time-needed-input" className="form-label">
						Duration (required)
					</label>
					<input 
						type="number"
						className="form-control"
						id="timeHrs-input"
						name="timeHrs"
            value={formData.timeHrs}
            onChange={handleChange}
						required
					/> hr
          <input 
						type="number"
						className="form-control"
						id="timeMins-input"
						name="timeMins"
            value={formData.timeMins}
            onChange={handleChange}
						required
					/> min
				</div>
				<div className="d-grid">
					<button
						type="submit"
						className="btn btn-primary btn-fluid"
					>
						Add Service
					</button>
				</div>
			</form>
		</>
	)
}

export default AddService