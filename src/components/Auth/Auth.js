import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import {setUserInfo} from '../../Ducks/reducer'

class Auth extends Component{
    constructor(props){
        super(props);

        this.state = {
            username: '',
            password: '',
            picture: ''
        }
        this.registerTheUser = this.registerTheUser.bind(this);
        this.loginTheUser = this.loginTheUser.bind(this)
    }

    registerTheUser(){

        axios.post('/user/register', {
            username: this.state.username,
            password: this.state.password,
            picture: this.state.picture
        });
        let info = {
            username: this.state.username,
            picture: this.state.picture
        };
        this.props.setUserInfo(info);
    }
    loginTheUser(){

        axios.post('/user/login', {
            username: this.state.username,
            password: this.state.password
        });
        let info = {
            username: this.state.username,
            picture: this.state.picture
        };
        this.props.setUserInfo(info)
    }

    render(){
        console.log(this.state)
        return(
            <div>
                <input value={this.username} onChange={e => this.setState({username: e.target.value})} />
                <br />
                <input value={this.password} onChange={e => this.setState({password: e.target.value})}/>
                <br />
                <input value={this.picture} onChange={e => this.setState({picture: e.target.value})} />
                <Link to='/dashboard'>
                <button onClick={this.loginTheUser}>Login</button>
                </Link>
                <Link to='/dashboard'>
                <button onClick={this.registerTheUser}>
                Register
                </button>
                </Link>
                
            </div>
        )
    }
}

export default connect(null, {setUserInfo})(Auth)