import React, { Component } from 'react'
export class InputText extends Component {
  constructor(props){
    super(props)
    this.state ={
      value: ''
    }
    this.changeState = this.changeState.bind(this);
  }
  changeState(e){
    this.setState({
      value: e.target.value
    })
  }
  resize(e){
    let textarea = e.target
    if(e.target.id !== 'name-input'){
    if(e.target.value.length < 20){
      textarea.style.height = `20px`
    }else{
      textarea.style.height = `40px`
      /* let scHeight = e.target.scrollHeight */
    }
  }
  }
  render() {
    return (
      <div className='personal-details-divs'>
        <textarea id={this.props.id} maxLength="25" className="input-text" type='text' placeholder={this.props.placeholder} onKeyUp={this.resize} onChange={this.changeState} value={this.state.value}/>
      </div>
    )
  }
}

export default InputText
