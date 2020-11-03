import React from 'react';
import RectDOM from 'react-dom';
import SearchBar from './components/SearchBar';
import ContactCard from './components/contactCards';
import Contacts from './contact';

class App extends React.Component {
  render() {
    return (
      <>
        <SearchBar />
        <div className="ui container">
          <div className="ui link cards">
            {Contacts.map(
              ({ name, email, phoneNumber, about, organization, url }) => {
                return (
                  <ContactCard
                    name={name}
                    email={email}
                    phoneNumber={phoneNumber}
                    about={about}
                    organization={organization}
                    url={url}
                  />
                );
              }
            )}
          </div>
        </div>
      </>
    );
  }
}

RectDOM.render(<App />, document.querySelector('#root'));
