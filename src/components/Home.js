import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      loading: true,
      error: null
    };
  }

  componentDidMount() {
    this.setState({
      loading: true,
      error: null
    });

    this.axiosCancelSource = axios.CancelToken.source();

    axios
      .get("https://api-fake.lauracosorio.vercel.app/persondata", {
        cancelToken: this.axiosCancelSource.token
      })
      .then((res) => {
        const users = res.data;

        this.setState({
          loading: false,
          users
        });
      });
  }

  componentWillUnmount() {
    this.axiosCancelSource.cancel();
  }

  render() {
    console.log(this.state.users);
    return (
      <>
        <div class="container">
          <div class="row row-cols-1 row-cols-md-2">
            {this.state.users.map((user) => {
              return (
                <div class="col-md-4 mb-4 mt-4">
                  <div class="card">
                    <div class="card-body">
                    <h1><Link to={`/users/${user.id}`}>ID ==> {user.id}</Link></h1>
                      <h5 class="card-title">{user.first_name}</h5>
                      <p class="card-text">{user.last_name}</p>
                      <p class="card-text">{user.email}</p>
                      <p class="card-text">{user.gender}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </>
    );
  }
}
