import React, { Component } from 'react';
//import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import { Form, Button } from 'semantic-ui-react';
import { withRouter } from 'react-router-dom'; //required to use this.props.history.push

class EnterZipcode extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      value: event.target.value
    });
  }

  handleSubmit(event) {
    //event.preventDefault();
    this.props.fetchRepInfo(this.state.value);
    this.props.history.push('/reps');
  }

  render() {
    return (
      <div>
        <h4 className="HeaderRight">Enter Your Address Manually</h4>
        <Form>
          <Form.Field className="FormField">
            <Form.Input
              className="FormInput"
              type="text"
              value={this.state.value}
              onChange={this.handleChange}
              placeholder="Enter An Address"
              size="large"
            />
          </Form.Field>
          <Button
            type="submit"
            onClick={this.handleSubmit}
            primary
            className="Button-right"
          >
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}

export default withRouter(connect(null, actions)(EnterZipcode));
