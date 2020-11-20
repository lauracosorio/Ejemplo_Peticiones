import React from "react";
import axios from "axios";
import { Form, Row, Col, Container, Button } from "react-bootstrap";
import Edit from "./Edit";

export class Users extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        first_name: "",
        last_name: "",
        email: "",
        gender: ""
      },
      loading: true,
      error: null
    };
  }

  _handleChange = (e) => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value
      }
    });
  };

  _handleSubmit = (e) => {
    //Para que no se recargue la página cuando le de click en guardar
    e.preventDefault();
    axios
      .post("https://api-fake-dynafzrw0.vercel.app/personData", this.state.form)
      .then((user) => {
        console.log("Se guardó el usuario con éxito");
        this.props.history.push("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    console.log(this.state.form);

    return (
      <Container className="mt-5">
        <Form onSubmit={this._handleSubmit} className="justify-content-center">
          <Form.Group as={Row} controlId="formPlaintextEmail">
            <Form.Label column sm="2" md="2">
              Nombre
            </Form.Label>
            <Col sm="10" md="4">
              <Form.Control
                type="text"
                onChange={this._handleChange}
                name="first_name"
                value={this.state.form.first_name}
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} controlId="formPlaintextEmail">
            <Form.Label column sm="2" md="2">
              Apellido
            </Form.Label>
            <Col sm="10" md="4">
              <Form.Control
                type="text"
                onChange={this._handleChange}
                name="last_name"
                value={this.state.form.last_name}
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} controlId="formPlaintextEmail">
            <Form.Label column sm="2" md="2">
              Correo
            </Form.Label>
            <Col sm="10" md="4">
              <Form.Control
                type="email"
                onChange={this._handleChange}
                name="email"
                value={this.state.form.email}
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} controlId="formPlaintextEmail">
            <Form.Label column sm="2" md="2">
              Género
            </Form.Label>
            <Col sm="10" md="4">
              <Form.Control
                type="text"
                onChange={this._handleChange}
                name="gender"
                value={this.state.form.gender}
              />
            </Col>
          </Form.Group>
          <Button variant="primary" type="submit">
            Guardar
          </Button>
        </Form>
      </Container>
    );
  }
}
