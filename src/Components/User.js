import React, { Component, Fragment } from 'react';

class User extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: [],
      isLoaded: false
    };
  }

  componentDidMount() {
    console.log(this.props.match.params.username);

    let furl = 'https://api.github.com/users/'.concat(
      this.props.match.params.username
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
                width="12"
                height="16"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M12 14.002a.998.998 0 0 1-.998.998H1.001A1 1 0 0 1 0 13.999V13c0-2.633 4-4 4-4s.229-.409 0-1c-.841-.62-.944-1.59-1-4 .173-2.413 1.867-3 3-3s2.827.586 3 3c-.056 2.41-.159 3.38-1 4-.229.59 0 1 0 1s4 1.367 4 4v1.002z"
                />
              </svg>
              <h2> User Profile</h2>
            </div>
          </div>

          <div>Loading ....</div>
        </Fragment>
      );
    } else {
      return (
        <Fragment>
          <div className="sub-heading-bar">
            <h1>{user.name}'s Public Github Profile</h1>
          </div>
          <div className="profile-container">
            <div className="profile-left-box">
              <a className="image-link" href={user.avatar_url}>
                <img
                  alt="avatar"
                  src={user.avatar_url}
                  style={{ width: 230, height: 230 }}
                />
              </a>

              <div className="name-container">
                <p className="realname-text">{user.name}</p>
                <p className="username-text">{user.login}</p>
              </div>

              <div className="bio-container">
                <p className="bio-text">{user.bio}</p>
              </div>

              <ul className="user-work-info">
                <li>
                  {user.company && (
                    <div className="user-company">
                      <svg
                        className="octicon octicon-organization"
                        viewBox="0 0 16 16"
                        version="1.1"
                        width="16"
                        height="16"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16 12.999c0 .439-.45 1-1 1H7.995c-.539 0-.994-.447-.995-.999H1c-.54 0-1-.561-1-1 0-2.634 3-4 3-4s.229-.409 0-1c-.841-.621-1.058-.59-1-3 .058-2.419 1.367-3 2.5-3s2.442.58 2.5 3c.058 2.41-.159 2.379-1 3-.229.59 0 1 0 1s1.549.711 2.42 2.088C9.196 9.369 10 8.999 10 8.999s.229-.409 0-1c-.841-.62-1.058-.59-1-3 .058-2.419 1.367-3 2.5-3s2.437.581 2.495 3c.059 2.41-.158 2.38-1 3-.229.59 0 1 0 1s3.005 1.366 3.005 4z"
                        />
                      </svg>
                      <p>{user.company}</p>
                    </div>
                  )}
                </li>
                <li>
                  {user.location && (
                    <div className="user-location">
                      <svg
                        className="octicon octicon-location"
                        viewBox="0 0 12 16"
                        version="1.1"
                        width="12"
                        height="16"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M6 0C2.69 0 0 2.5 0 5.5 0 10.02 6 16 6 16s6-5.98 6-10.5C12 2.5 9.31 0 6 0zm0 14.55C4.14 12.52 1 8.44 1 5.5 1 3.02 3.25 1 6 1c1.34 0 2.61.48 3.56 1.36.92.86 1.44 1.97 1.44 3.14 0 2.94-3.14 7.02-5 9.05zM8 5.5c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"
                        />
                      </svg>
                      <a href={user.location}>{user.location}</a>
                    </div>
                  )}
                </li>

                <li>
                  {' '}
                  {user.email && (
                    <div className="user-email">
                      <svg
                        className="octicon octicon-mail"
                        viewBox="0 0 14 16"
                        version="1.1"
                        width="14"
                        height="16"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M0 4v8c0 .55.45 1 1 1h12c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1H1c-.55 0-1 .45-1 1zm13 0L7 9 1 4h12zM1 5.5l4 3-4 3v-6zM2 12l3.5-3L7 10.5 8.5 9l3.5 3H2zm11-.5l-4-3 4-3v6z"
                        />
                      </svg>
                      <a href={user.email}>{user.email}</a>
                    </div>
                  )}
                </li>
                <li>
                  {user.blog && (
                    <div className="user-blog">
                      <svg
                        alt="Personal site icon"
                        className="octicon octicon-link"
                        viewBox="0 0 16 16"
                        version="1.1"
                        width="16"
                        height="16"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"
                        />
                      </svg>
                      <a href={user.blog}>{user.blog}</a>
                    </div>
                  )}
                </li>
              </ul>
            </div>

            <div className="profile-right-box">
              <nav className="top-git-bar">
                <a
                  href={`/user/${user.login}`}
                  style={{ borderBottom: '#e36209 solid 3px' }}
                >
                  Overview
                </a>
                <a href={`https://github.com/${user.login}?tab=repositories`}>
                  Repositories{' '}
                  <span className="tag-no">{user.public_repos}</span>
                </a>
                <a href={`https://github.com/${user.login}?tab=stars`}>Stars</a>
                <a href={`https://github.com/${user.login}?tab=followers`}>
                  Followers <span className="tag-no">{user.followers}</span>
                </a>
                <a href={`https://github.com/${user.login}?tab=following`}>
                  Following <span className="tag-no">{user.following}</span>
                </a>
              </nav>

              <div className="public-info-user">
                <h1
                  style={{
                    fontWeight: '400',
                    padding: 10,
                    margin: '10px 10px 10px 0'
                  }}
                >
                  Public info about {user.name ? user.name : 'John Doe'}
                </h1>
                <ul className="actual-info-ul">
                  <li>
                    <span className="actual-tag">Company :</span>
                    <span className="actual-no">{user.company}</span>
                  </li>
                  <li>
                    <span className="actual-tag">blog :</span>
                    <span className="actual-no">{user.blog}</span>
                  </li>
                  <li>
                    <span className="actual-tag">location :</span>
                    <span className="actual-no">{user.location}</span>
                  </li>
                  <li>
                    <span className="actual-tag">hireable :</span>
                    <span className="actual-no">
                      {user.hireable ? 'Yes' : 'No'}
                    </span>
                  </li>
                  <li>
                    <span className="actual-tag">Public Repositories :</span>
                    <span className="actual-no">{user.public_repos}</span>
                  </li>
                  <li>
                    <span className="actual-tag">Public Gists :</span>
                    <span className="actual-no">{user.public_gists}</span>
                  </li>
                  <li>
                    <span className="actual-tag">Followers :</span>
                    <span className="actual-no">{user.followers}</span>
                  </li>
                  <li>
                    <span className="actual-tag">Following :</span>
                    <span className="actual-no">{user.following}</span>
                  </li>
                  <li>
                    <span className="actual-tag">
                      Github profile created on :
                    </span>
                    <span className="actual-no">{user.created_at}</span>
                  </li>
                  <li>
                    <span className="actual-tag">
                      Github profile updated on :
                    </span>
                    <span className="actual-no">{user.updated_at}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Fragment>
      );
    }
  }
}

export default User;
