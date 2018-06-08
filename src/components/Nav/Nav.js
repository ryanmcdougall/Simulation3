import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import { connect } from 'react-redux'


function Nav(props){
    console.log(props)
        return(
            <div>
                {props.username}{props.picture}
                <Link to='/dashboard'>
                    <button>HOME</button>
                </Link>
                <Link to='/post/'>
                    <button>New Post</button>
                </Link>
                <Link to='/'>
                    <button>LogOut</button>
                </Link>
            </div>
        )
    }
function mapStateToProps(state){
    return{
        username: state.username,
        picture: state.picture
    }
}
console.log()
export default connect(mapStateToProps)(Nav)