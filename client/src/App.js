import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import './App.css';
import RSVPListing from "./components/RSVPListing";
import RSVPAdd from "./components/RSVPAdd";

class App extends Component {
  constructor(props) {
    super(props);
    this.state=
        {
          data:[]
        }

  }

  RSVPcollection = () =>
  {
    fetch("/rsvp/")
        .then(data => data.json())
        .then( convertedData => this.setState({data:convertedData}))
  };

  componentDidMount() {
    this.RSVPcollection()
  }

  render() {
    return (
      <div className="App">
        <Router>
          <p>MAIN PAGE</p>
          <RSVPListing dataReset={this.RSVPcollection} rsvps={this.state.data} />
          {/*<Link to="/newRSVP">Add</Link>*/}
          {/*<Route exact path="/newRSVP" component={() => <RSVPAdd dataReset={this.RSVPcollection}/>} />*/}
          <RSVPAdd dataReset={this.RSVPcollection}/>
        </Router>
      </div>
    );
  }
}

export default App;