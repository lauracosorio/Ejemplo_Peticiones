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
      .get("https://users-phi.vercel.app/users", {
        cancelToken: this.axiosCancelSource.token
      })
      .then((res) => {
        const users = res.data;
        // console.log(res)
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
    if (this.state.loading === true) {
      return <h1> Loading.... </h1>;
    } else {
      return (
        <>
          <div className="container">
            <div className="row row-cols-1 row-cols-md-2">
              {this.state.users.map((user) => {
                return (
                  <div className="col-md-4 mb-4 mt-4" key={user.id}>
                    <div className="card">
                      <div className="card-body">
                        <h1>
                          <Link to={`/users/${user.id}`}>ID ==> {user.id}</Link>
                        </h1>
                        <h5 className="card-title">{user.first_name}</h5>
                        <p className="card-text">{user.last_name}</p>
                        <p className="card-text">{user.email}</p>
                        <p className="card-text">{user.gender}</p>
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
}
