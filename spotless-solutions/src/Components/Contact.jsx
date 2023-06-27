
import React from 'react'

function Contact() {
  return (
    <div>
        <h3>Contact Us Now!</h3>
        <h4>You can fill out this form and we will give you a custom quote with more detailed information. If you need to call us please reach out to us at *blank*</h4>
       
       <div>
        <h3> Name</h3>
        <input type='text' id='name'  name='name' placeholder='Jane'/>
        <h3>Phone Number</h3>
        <input type='text' id='number' min='10' max='10' placeholder='(123)-456-7890'/>
        <h3>Email</h3>
        <input type='text'placeholder='Janedoe@example.com'/>
        <h3>Select a Service</h3>
       <label for = 'select a service'>Select a Service:</label>
       <select name='services' id='services'>
        <option value='flatrate'>Flat Rate</option>
        <option value='hourly'>Hourly</option>
       </select>
       </div>
    </div>
  )
}

export default Contact