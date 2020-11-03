import React from 'react'

class SearchBar extends React.Component{
    render(){
    return (
        <>
        <div className="ui secondary pointing menu">
            <a className="item active" href = "/">
                Home
            </a>
            <a className="item" href = "/">
                Messages
            </a>
            <a className="item" href = "/">
                Friends
            </a>
            <div className="right menu">
                <a className="ui item" href = "/">
                Logout
                </a>
            </div>
        </div>

        </>
    )}
}

export default SearchBar