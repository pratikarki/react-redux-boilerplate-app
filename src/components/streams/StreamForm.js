import React from 'react';
import { Field, reduxForm } from 'redux-form';

class StreamForm extends React.Component {

  renderError({ error, touched }) {
    if (error && touched) {
      return <p style={{color: 'mediumvioletred', padding: '5px 3px'}}>{error}</p>;
    }
  }

  renderInput = ({ input, label, placeholder, meta }) => {
    const className = `field ${meta.error && meta.touched ? 'error' : ''}`;
    return (
      <div className={className}>
        <h5>{label}</h5>
        <input {...input} placeholder={placeholder} autoComplete="off" />
        {this.renderError(meta)}
      </div>
    )
  }

  onSubmit = (formValues) => {
    this.props.onSubmit(formValues);
  }

  render() {
    // console.log(this.props);
    return (
      <form className="ui form error" onSubmit={this.props.handleSubmit(this.onSubmit)}>
        <Field 
          name="title"
          component={this.renderInput}
          label="Title of Your Stream:"
          placeholder="Title"
        />
        <Field 
          name="description"
          component={this.renderInput}
          label="Few Words About It:"
          placeholder="Description"
        />
        <button className="ui button primary" type="submit">Submit</button>
      </form>
    )
  }
}

const validate = (formValues) => {
  const errors = {};
  if (!formValues.title) {
    errors.title = 'No title? Really?';
  }
  if (!formValues.description) {
    errors.description = 'No words about your stream? Come on!';
  }
  return errors;
}

export default reduxForm({
  form: 'STREAM_FORM',
  validate: validate
})(StreamForm);