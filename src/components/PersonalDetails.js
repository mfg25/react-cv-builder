import React, { Component } from 'react'
import InputText from './InputText'
export class PersonalDetails extends Component {
  render() {
    return (
    <div>
      <InputText placeholder="Name" id={'name-input'}/>
      <div id='personal-details-container'>
        <InputText placeholder="Title" id={'title-input'}/>
        <InputText placeholder="Phone" id={'phone-input'}/>
        <InputText placeholder="Email" id={'email-input'}/>
        <InputText placeholder="Location" id={'location-input'}/>
      </div>
    </div>
    )
  }
}

export default PersonalDetails
