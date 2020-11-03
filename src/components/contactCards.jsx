import React from 'react';
import './styles/app.css';
class ContactCard extends React.Component {
  render(props) {
    return (
      <div className="card">
        <div className="image">
          <img src={this.props.url} alt=" " />
        </div>
        <div className="content">
          <div className="header">{this.props.name}</div>
          <div className="meta">
            <a href="/">{this.props.phoneNumber}</a>
          </div>
          <div className="description">{this.props.about}</div>
        </div>
        <div className="extra content">
          <span className="right floated">{this.props.email}</span>
          <span>
            <i className="user icon"></i>
            {this.props.organization}
          </span>
        </div>
      </div>
    );
  }
}

export default ContactCard;
