import React, { Component, Fragment } from 'react';
import { Route, Switch, Link } from 'react-router-dom';

import searchkeyslash from './../images/search-key-slash.svg';
import './../css/App.css';

import User from './User';
import UserSearch from './UserSearch';
import Logo from './../images/logo.svg';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      query: '',
      user: [],
      isLoaded: false,
      userprofile: ''
    };

    this.handleSearch = this.handleSearch.bind(this);
  }

  componentDidMount() {
    fetch('https://api.github.com/users?since=0')
      .then(res => res.json())
      .then(json => {
        this.setState({
          isLoaded: true,
          user: json
        });
      });
  }

  handleSearch(e) {
    this.setState({ query: e.target.value });
  }

  render() {
    var { isLoaded, user } = this.state;
    if (!isLoaded) {
      return <div>Loading ....</div>;
    } else {
      return (
        <Fragment>
          <header className="App-header">
            <div className="d-flex">
              <div className="header-logo">
                <Link to="/">
                  <svg
                    height="32"
                    className="octicon octicon-mark-github"
                    viewBox="0 0 16 16"
                    version="1.1"
                    width="32"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"
                      fill="#fff"
                    />
                  </svg>
                </Link>
              </div>
              <form className="Search-box-form">
                <Link to="/">
                  <label className="Search-box-label" id="Search-box-label-id">
                    <input
                      type="text"
                      placeholder="Search Github"
                      className="Search-box-input"
                      value={this.state.query}
                      onChange={this.handleSearch}
                    />
                    <div className="Search-box-slash">
                      <img
                        src={searchkeyslash}
                        alt=""
                        className="search-key-slash"
                      />
                    </div>
                  </label>
                </Link>
                <Link to="/search">
                  <button type="submit" className="Search-box-button" />
                </Link>
              </form>
              <nav className="Navigation">
                <ul>
                  <li>
                    <a href="https://github.com/features">Why Github?</a>
                  </li>
                  <li>
                    <a href="https://github.com/enterprise">Enterprise</a>
                  </li>
                  <li>
                    <a href="https://github.com/explore">Explore</a>
                  </li>
                  <li>
                    <a href="https://github.com/marketplace">Marketplace</a>
                  </li>
                  <li>
                    <a href="https://github.com/pricing">Pricing</a>
                  </li>
                </ul>
              </nav>
            </div>

            <div className="HeaderMenu" />
          </header>
          <Switch>
            <Route
              exact
              path="/"
              render={() => (
                <Fragment>
                  <div className="sub-heading-bar">
                    <h1>Listing Users from id 1 to 30</h1>
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
                      <p>30</p>
                    </div>
                  </div>
                  <div className="list-User">
                    <ul className="user-unordered-list">
                      {user.map(user => (
                        <li key={user.id}>
                          <div className="user-info">
                            <Link
                              className="user-list-link"
                              to={`/user/${user.login}`}
                            >
                              <img alt="avatar" src={user.avatar_url} />
                              <h1 style={{ color: '#000' }}> {user.login}</h1>
                            </Link>
                            <p>
                              <a href={user.html_url}>Github Profile Link</a>
                            </p>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Fragment>
              )}
            />
            <Route
              exact
              path="/search"
              render={() => (
                <Fragment>
                  <UserSearch searchString={this.state.query} />
                </Fragment>
              )}
            />
            <Route path="/user/:username" component={User} />
          </Switch>
          <footer>
            <p>
              This website uses Github API to search & fetch details of the
              user.
            </p>

            <div>
              <span className="cre-pre">Created by | </span>
              <a
                className="cre-name"
                href="http://portfolio.siddharth-pandey.com"
              >
                Siddharth Pandey |
              </a>
            </div>
          </footer>
        </Fragment>
      );
    }
  }
}

export default App;
