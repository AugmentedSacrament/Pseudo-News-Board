import React, { Component } from 'react'
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {createPost} from '../actions/postActions';


class Postform extends Component {
    constructor(props){
        super(props);

        this.state = {
            title: '',
            body: ''
        }

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e){
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    onSubmit(e){
        e.preventDefault();

        const post = {
            title:this.state.title,
            body:this.state.body
        }

       this.props.createPost(post);
    }

  render() {
    return (
        <form className='Form' onSubmit={this.onSubmit}>
            <label htmlFor='title'>
                Title
            </label>
            <input onChange={this.onChange} type='text' placeholder='Title here' name='title' value={this.state.title}/>

            <label htmlFor='body'>
                Body
            </label>
            <textarea onChange={this.onChange} name='body' columns='5' rows='4' value={this.state.body}/>

            <button type='submit' className='submitbtn'>
                Submit
            </button>
        </form>
    )
  }
}

Postform.propTypes = {
    createPost: PropTypes.func.isRequired
}

export default connect(null, {createPost})(Postform);