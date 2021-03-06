const React = require('react');
const axios = require('axios');

class Confirm extends React.Component {
	constructor(props) {
    super(props);

    if(!localStorage.getItem("application")) {
      window.location = "/";
      return;
    }

    this.state = {

    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    if(!document.getElementById("bgcheck").checked) return;

    var application = JSON.parse(localStorage.getItem("application"));
    axios.post("/newApplication", {
      application: application
    }).then(function(resp) {
      console.log(resp);
    });
  }

  render() {
    return (
        <div>
          <form onSubmit={this.handleSubmit}>
            To proceed with the interview, you must consent to a background check. Check the box, and press the button below to submit your application. <br/>
            I consent to a background check: <input id="bgcheck" type="checkbox"></input><br/>
            <button type="submit">Submit Application</button>
          </form><br/><br/>
          <a href="/">Submit a new Application</a>
        </div>
      );
  }
}

module.exports = Confirm;