import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchAllStreams } from '../../actions';

class StreamList extends React.Component {

  componentDidMount() {
    this.props.fetchAllStreams();
  }

  renderEditDelBtns(stream) {
    if (this.props.currentUserId === stream.userId) {
      return (
        <div className="right floated content">
          <Link to={`/streams/edit/${stream.id}`} className="ui tiny button basic blue">Edit</Link>
          <Link to={`/streams/delete/${stream.id}`} className="ui tiny button basic red">Delete</Link>
        </div>
      )
    }
  }

  renderCreateBtn() {
    if (this.props.isSignedIn) {
      return (
        <div style={{textAlign: 'right'}}>
          <Link to="/streams/create" className="ui button primary">Create New Stream</Link>
        </div>
      )
    }
  }

  renderedList() {
    return this.props.allStreams.map(stream => {
      return(
        <div className="item" key={stream.id}>
          {this.renderEditDelBtns(stream)}
          <i className="large middle aligned icon camera" />
          <Link to={`/streams/view/${stream.id}`} className="content">
            Title: <span style={{fontWeight: 'bold'}}>{stream.title}</span>
            <div className="description">Description: 
              <span style={{fontWeight: 'bold'}}>{stream.description}</span>
            </div>
          </Link>
        </div>
      )
    })
  }

  render() {
    console.log();
    return (
      <div>
        <h3>All Streams:</h3>
        <div className="ui celled list">{this.renderedList()}</div>
        {this.renderCreateBtn()}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { 
    allStreams: Object.values(state.streams),
    currentUserId: state.auth.userId,
    isSignedIn: state.auth.isSignedIn
  };
}

export default connect(mapStateToProps, { fetchAllStreams })(StreamList);