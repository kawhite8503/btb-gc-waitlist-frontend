import { useState, useRef, useEffect } from "react"

function AddService({handleAddService}) {
  const formElement = useRef()
  const [validForm, setValidForm] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    timeHrs: '',
    timeMins: ''
  })
  const handleChange = evt => {
    setFormData({ ...formData, [evt.target.name]: evt.target.value})
  }

  useEffect(() => {
    formElement.current.checkValidity() ? setValidForm(true) : setValidForm(false)
  }, [formData])

  const handleSubmit = evt => {
    evt.preventDefault()
    handleAddService(formData)
  }

	return (
		<>
			<h2>Add Service</h2>
      <h1></h1>
			<form autoComplete="off" ref={formElement} onSubmit={handleSubmit}>
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
						Duration
					</label>
					<input 
						type="number"
						className="form-control"
						id="timeHrs-input"
						name="timeHrs"
            value={formData.timeHrs}
            onChange={handleChange}						
					/> hr
          <input 
						type="number"
						className="form-control"
						id="timeMins-input"
						name="timeMins"
            value={formData.timeMins}
            onChange={handleChange}						
					/> min
				</div>
				<div className="d-grid">
					<button
						type="submit"
						className="btn btn-primary btn-fluid"
            disabled={!validForm}
					>
						Add Service
					</button>
				</div>
			</form>
		</>
	)
}

export default AddService