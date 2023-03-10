import React, { Component } from 'react'
import InputText from './InputText'
import briefcase from '../icons/briefcase.png'
import email from '../icons/email.png'
import phonecall from '../icons/phone-call.png'
import location from '../icons/location.png'
export class PersonalDetails extends Component {
  render() {
    return (
    <div>
      <InputText placeholder="Name" id={'name-input'}/>
      <div id='personal-details-container'>
        <InputText placeholder="Title" id={'title-input'} src={briefcase}/>
        <InputText placeholder="Phone" id={'phone-input'} src={phonecall}/>
        <InputText placeholder="Email" id={'email-input'} src={email}/>
        <InputText placeholder="Location" id={'location-input'} src={location}/>
      </div>
    </div>
    )
  }
}

export default PersonalDetails
