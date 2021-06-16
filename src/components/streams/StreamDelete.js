import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Modal from '../Modal';
import history from '../../history';
import { fetchOneStream, deleteStream } from '../../actions';

class StreamDelete extends React.Component {

  componentDidMount() {
    this.props.fetchOneStream(this.props.match.params.id);
  }

  renderModalBtns () {
    const { id } = this.props.match.params;
    return (
      // <> is just React.Fragment
      <>
        <Link to="/" className="ui tiny basic button">Cancel</Link>
        <button className="ui tiny button basic red" onClick={() => this.props.deleteStream(id)}>Yes, Delete</button>
      </>
    )
  }

  renderContent() {
    if (!this.props.stream) return 'Are you sure you want to delete this stream?';
    return `Are you sure you want to delete "${this.props.stream.title}" stream?`
  }

  render() {
    // console.log(this.props);
    return (
      <Modal 
        title="Delete Stream"
        content={this.renderContent()}
        actions={this.renderModalBtns()}
        onDismiss={() => history.push('/')}
      />
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return { stream: state.streams[ownProps.match.params.id] }
}

export default connect(mapStateToProps, { fetchOneStream, deleteStream })(StreamDelete);