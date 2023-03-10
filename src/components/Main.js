import React, { Component } from 'react'
import './Main.css'
import PersonalDetails from './PersonalDetails'
import uniqid from 'uniqid'
class InputFieldsContainer extends Component {
  render() {
    return (
      <div className='main-container'>
        <PersonalDetails/>
        <CreateTitle title={'Work Experience'} />
        <InfoSection type={'Add Experience'} input1={'Job Title'} input2={'Company'} input3={'Date Worked (MM/YYYY - MM/YYYY)'} input4={'Description'}/>
        <CreateTitle title={'Education'}/>
        <InfoSection type={'Add Education'} input1={'School'} input2={'Degree'} input3={'Date (MM/YYYY - MM/YYYY)'}/>
      </div>
    )
  }
}

class InfoSection extends Component {
  constructor(props){
    super(props)
    this.state ={
      active: false,
      list: [],
      value: {firstInput: '', secondInput: '', thirdInput: '', fourthInput: '', id: ''}
    }
    this.changeSectionState = this.changeSectionState.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(e){
    e.preventDefault()
    this.setState({
      active: !this.state.active,
      list: [...this.state.list, this.state.value],
      value: {firstInput: '', secondInput: '', thirdInput: '', fourthInput: ''}
    });
  }

  changeJobState(e){
    
    this.setState({
      value: {
        firstInput: e.target.value,
        secondInput: this.state.value.secondInput,
        thirdInput: this.state.value.thirdInput,
        fourthInput: this.state.value.fourthInput,
        id: uniqid(),
      }
    })
  }

  changeCompanyState(e){
    
    this.setState({
      value: {
        firstInput: this.state.value.firstInput,
        secondInput: e.target.value,
        thirdInput: this.state.value.thirdInput,
        fourthInput: this.state.value.fourthInput,
        id: uniqid(),
      }
    })
  }

  changeDateState(e){
    
    this.setState({
      value: {
        firstInput: this.state.value.firstInput,
        secondInput: this.state.value.secondInput,
        thirdInput: e.target.value,
        fourthInput: this.state.value.fourthInput,
        id: uniqid(),
      }
    })
  }

  changeDescriptionState(e){
    
    this.setState({
      value: {
        firstInput: this.state.value.firstInput,
        secondInput: this.state.value.secondInput,
        thirdInput: this.state.value.thirdInput,
        fourthInput:  e.target.value,
        id: uniqid(),
      }
    })
  }

  changeSectionState(){
    this.setState({
    active: !this.state.active
  })}

  deleteInfo(id){
    console.log(id)
    const newList = this.state.list.filter((item) => item.id !== id)
    this.setState({
      list: newList
    })
  }
  
  render() {
      if(!this.state.active){
        return (
        <div>
        <RenderList list={this.state.list} deleteInfo={this.deleteInfo.bind(this)}/>
          <button className='add-button' onClick={this.changeSectionState}>{this.props.type}</button>
        </div>
        )
      }
      else{
        return(
          <div>
            <form id='form-container' onSubmit={this.handleSubmit}>
              <LabelAndInput id={'first-input'} name={this.props.input1} value={this.state.value.firstInput} onchange={this.changeJobState.bind(this)}/>
              <LabelAndInput id={'second-input'} name={this.props.input2} value={this.state.value.secondInput} onchange={this.changeCompanyState.bind(this)}/>
              <LabelAndInput id={'third-input'} name={this.props.input3} value={this.state.value.thirdInput} onchange={this.changeDateState.bind(this)}/>
              {this.props.input4 && <LabelAndInput id={'fourth-input'} name={this.props.input4} value={this.state.value.fourthInput} size={50} onchange={this.changeDescriptionState.bind(this)}/>}
              <button className='add-button' onClick={this.changeSectionState}>Cancel</button>
              <button className='add-button' type="submit">Submit</button>
            </form>
          </div>
        )
      }
 }
}

class RenderList extends Component {
  
  render() {
    return (
      <div>
        {this.props.list.map((item) =>{
          return (
            <div className="job-list" key={item.id}>
              <div id='info-div'>
                <p><big>{item.firstInput}</big>, {item.secondInput}</p>
                <p>{item.thirdInput}</p>
                <p>{item.fourthInput}</p>
              </div>
              <button onClick={() => this.props.deleteInfo(item.id)}>X</button>
            </div>
          )
      })}
      </div>
    )
  }
}

class LabelAndInput extends Component {
  render() {
    if(this.props.name === 'Description'){
    return (
      <div>
        <label htmlFor={this.props.id}>{this.props.name}</label>
        <textarea id={this.props.id} value={this.props.value} onChange={this.props.onchange} type='text'/>
      </div>
    )
  }else{
    return (
      <div>
        <label htmlFor={this.props.id}>{this.props.name}</label>
        <input id={this.props.id} value={this.props.value} onChange={this.props.onchange} type='text'/>
      </div>
    )
  }
}
}





class CreateTitle extends Component {
  render() {
    return (
      <div>
        <h2 className='title'>{this.props.title}</h2>
      </div>
    )
  }
}

export default InputFieldsContainer
