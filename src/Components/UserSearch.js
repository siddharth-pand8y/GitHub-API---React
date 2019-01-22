import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';

class UserSearch extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: [],
      isLoaded: false
    };
  }

  componentDidMount() {
    let furl = 'https://api.github.com/search/users?q='.concat(
      this.props.searchString
    );
    console.log(furl);
    fetch(furl)
      .then(res => res.json())
      .then(json => {
        this.setState({
          isLoaded: true,
          user: json
        });
      });

    console.log(this.state.user.total_count);
  }

  render() {
    var { isLoaded, user } = this.state;

    if (!isLoaded) {
      return (
        <Fragment>
          <div className="sub-heading-bar">
            <h1>Listing Users</h1>
            <div className="sub-heading-container">
              <svg
                className="octicon octicon-person"
                viewBox="0 0 12 16"
                version="1.1"
                width="22.5"
                height="30"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M12 14.002a.998.998 0 0 1-.998.998H1.001A1 1 0 0 1 0 13.999V13c0-2.633 4-4 4-4s.229-.409 0-1c-.841-.62-.944-1.59-1-4 .173-2.413 1.867-3 3-3s2.827.586 3 3c-.056 2.41-.159 3.38-1 4-.229.59 0 1 0 1s4 1.367 4 4v1.002z"
                />
              </svg>
              <h2> People</h2>
              <p>0</p>
            </div>
          </div>

          <div>Loading ....</div>
        </Fragment>
      );
    } else {
      return (
        <Fragment>
          <div className="sub-heading-bar">
            <h1>Search Results</h1>
            <div className="sub-heading-container">
              <svg
                className="octicon octicon-person"
                viewBox="0 0 12 16"
                version="1.1"
                width="12"
                height="16"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M12 14.002a.998.998 0 0 1-.998.998H1.001A1 1 0 0 1 0 13.999V13c0-2.633 4-4 4-4s.229-.409 0-1c-.841-.62-.944-1.59-1-4 .173-2.413 1.867-3 3-3s2.827.586 3 3c-.056 2.41-.159 3.38-1 4-.229.59 0 1 0 1s4 1.367 4 4v1.002z"
                />
              </svg>
              <h2> Displayed users :</h2>
              <p>30</p>
            </div>
          </div>

          <div className="list-User">
            <ul className="user-unordered-list">
              {user.items.map(user => (
                <li key={user.id}>
                  <div className="user-info">
                    <Link className="user-list-link" to={`/user/${user.login}`}>
                      <img alt="avatar" src={user.avatar_url} />
                      <h1 style={{ color: '#000' }}> {user.login}</h1>
                    </Link>
                    <p>
                      <a href={user.html_url}>Github Profile</a>
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </Fragment>
      );
    }
  }
}

export default UserSearch;
