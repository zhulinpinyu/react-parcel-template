import React, { Component } from 'react'
import ReactDOM from 'react-dom'

class App extends Component {
    render() {
        return ( <
            div > Helli Parcel! < /div>
        )
    }
}

const root = document.getElementById('app')

ReactDOM.render( < App / > , root)