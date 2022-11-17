import { useState } from "react"
import AddService from "../../components/AddService/AddService"

function Services(props) {
	return (
		<>
			<h1>Services</h1>
			<AddService handleAddService={props.handleAddService}/>
		</>
	)
}

export default Services