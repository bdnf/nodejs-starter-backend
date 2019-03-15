import React, {Component} from 'react';
import axios from 'axios';
import { apiCall } from "../services/api";
import addError from "../store/reducers/errors"
const TESTAPIURL = "/api/testroute/"


export default class PersonList extends Component {
  state = {
    name: "",
    info: ""
  }

  componentDidMount() {
    //  axios.get(`https://jsonplaceholder.typicode.com/users/`)
    // axios.get(TESTAPIURL)
    //   .then(res => {
    //     const persons = res.data;
    //     this.setState({ name:persons.username});
    //     this.setState({ info:persons.info});
    //   })
    this.loadData() //TODO support
  }

  loadData() {
      return dispatch => {
        return apiCall("get", TESTAPIURL)
          .then(res => {
            const persons = res.data;
            dispatch(this.setState({ name:persons.username}))
            dispatch(this.setState({ info:persons.info}))

          })
          .catch(err => {
            dispatch(addError(err.message))
          });
      }
  }

  render() {
    return (
      <ul>
        { <li> {this.state.name} : {this.state.info}</li>}
      </ul>
    )
  }
}
