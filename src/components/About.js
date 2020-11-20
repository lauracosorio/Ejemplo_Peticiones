import React from "react";
import axios from "axios";
import Edit from './Edit'

export class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: [],
      loading: true,
      error: null,
      show: false
    };
  }

  componentDidMount() {
    this.setState({
      loading: true,
      error: null
    });

    this.axiosCancelSource = axios.CancelToken.source();

    axios
      .get(
        `https://api-fake-dynafzrw0.vercel.app/personData/${this.props.match.params.id}`,
        { cancelToken: this.axiosCancelSource.token }
      )
      .then((res) => {
        const user = res.data;
        this.setState({
          loading: false,
          user
        });
      });
  }

  _handleDelete = (e) => {
    this.setState({
      loading: true,
      error: null
    });

    this.axiosCancelSource = axios.CancelToken.source();
    axios
      .delete(
        `https://api-fake-dynafzrw0.vercel.app/personData/${this.props.match.params.id}`,
        { cancelToken: this.axiosCancelSource.token }
      )
      .then((res) => {
        this.setState({
          loading: false
        });
        console.log("Usuario eliminado con exito");
        this.props.history.push("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  _handleShow = () => {
    this.setState({
      show:true
    })
  };

  componentWillUnmount() {
    this.axiosCancelSource.cancel();
  }

  render() {
    console.log(this.state.show);

    return (
      <>
      <div 
        key={`${this.state.user.first_name} ${this.state.user.id}`}
        style={{ width: "18rem" }}
        className=" card m-5"
      >
        <div className="card-body">
          <h5 className="card-title">{this.state.user.first_name}</h5>
          <h5 className="card-title">{this.state.user.last_name}</h5>
          <p className="card-text">{this.state.user.email}</p>
          <p className="card-text">{this.state.user.gender} </p>
          <button
            className="btn btn-danger col-md-5  col-sm-3"
            onClick={this._handleDelete}
            variant="danger"
            type="submit"
          >
            Eliminar
          </button>{" "}
          {""}
          <button
            className=" btn btn-warning col-md-5 col-sm-3"
            onClick={this._handleShow}
            variant="warning"
            type="submit"
          >
            Editar
          </button>
        </div>

        <div className="row"></div>
      </div>


       <Edit about={this}/> 
       </>
    );
  }
}
