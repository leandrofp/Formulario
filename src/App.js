import React, { Component } from 'react';
import {Label,  Button,Form, Divider } from 'semantic-ui-react'

class App extends Component {
  
  constructor(props){
    super(props);
  
    this.state = {estadoInput1: false,estadoInput2: false,estadoSubmit:false};

  }
  
  submitHandler = (e,value) => {
    if(this.state.estadoInput1 === true && this.state.estadoInput2 === true) this.setState({estadoSubmit:true});
    console.log('pase3' , this.state.estadoSubmit);
  }
  input1Handler = (e,value) => {
    if(value === null ) this.setState({estadoInput1: false});
    else this.setState({estadoInput1: true});
    console.log('pase1' , this.state.estadoInput1);
  }
  input2Handler = (e,value) => {
    if(value === null ) this.setState({estadoInput2:false});
    else this.setState({estadoInput2: true});
    console.log('pase2' , this.state.estadoInput2);
  }

  render() {
    return (
      <div>
        <Form onSubmit={this.submitHandler}>
          <Form.Field>
            <label>First Name</label>
            <input placeholder='First Name' onChange={this.input1Handler} />
            {this.state.estadoInput1 ? null :  <Label basic color='red' pointing>Please enter a value</Label> }
          </Form.Field>
          <Form.Field>
            {this.state.estadoInput2 ? null : <Label basic color='red' pointing='below'>Please enter a value</Label> }
            <label>Last Name</label>
            <input placeholder='Last Name' onChange={this.input2Handler} />
          </Form.Field>
          <Button type='submit' disabled ={this.state.estadoSubmit} >Submit</Button>
        </Form>
        <Divider/>
          {this.state.estadoSubmit ? <Label className="App-Label" >Registrado :)</Label> : null}
      </div>
    );
  }
}

export default App;

