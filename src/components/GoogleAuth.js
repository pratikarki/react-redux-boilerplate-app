import React from 'react';
import { connect } from 'react-redux';
import { signIn, signOut } from '../actions';

class GoogleAuth extends React.Component {

  componentDidMount() {
    // Load additional library for oauth2
    window.gapi.load('client:auth2', () => { //after loading, this callback runs and initializes authentication client
      window.gapi.client.init({
        clientId: '742621116460-kda33nhc1l7v8f06qj96gtb8b3t0srdc.apps.googleusercontent.com',
        scope: 'email'
      })
      .then(() => {
        this.auth = window.gapi.auth2.getAuthInstance();
        this.onAuthChange(this.auth.isSignedIn.get()); // find if user is signed in or not, and update the state
        this.auth.isSignedIn.listen(this.onAuthChange);
      })
    });
  }

  onAuthChange = (isSignedIn) => {
    if (isSignedIn) {
      this.props.signIn(this.auth.currentUser.get().getId()); //pass the id of user currently signed in
    }
    else {
      this.props.signOut();
    }
  }

  renderAuthButton() {
    if (this.props.isSignedIn === null) {
      return null;
    }
    else if (this.props.isSignedIn) {
      return (
        <button className="ui red google button" onClick={() => this.auth.signOut()}>
          <i className="google icon" />
          Sign Out
        </button>
      )
    }
    else {
      return (
        <button className="ui blue google button" onClick={() => this.auth.signIn()}>
          <i className="google icon" />
          Sign In with Google
        </button>
      )
    }
  }

  render() {
    return(
      <div style={{display: 'flex'}}>
        {this.renderAuthButton()}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  // console.log(state);
  return { isSignedIn: state.auth.isSignedIn };
}

export default connect(mapStateToProps, { signIn, signOut }) (GoogleAuth);