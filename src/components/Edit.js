import React from "react";
import axios from "axios";
import { Modal, Button, Form, Row, Col, Container } from "react-bootstrap";

class Edit extends React.Component {
  constructor(props) {
    super(props);
    
    this.about = props.about;
  }

  _handleClose = () => {
    this.about.setState({ show: false });
  };

  _handleChange = (e) => {
    this.about.setState({
      user: {
        ...this.about.state.user,
        [e.target.name]: e.target.value
      }
    });
  };

  handleSubmit = (e) => {
    //Para que no se recargue la página cuando le de click en guardar
    e.preventDefault();
    axios
      .put(
        `https://api-fake-dynafzrw0.vercel.app/personData/${this.about.state.user.id}`,this.about.state.user
      )
      .then((user) => {
     
        console.log(`${user} Se guardó el usuario con éxito`);
        // this.props.history.push("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    // console.log(this.about.state.user);
    return (
      <>
        <Container>
          <Modal
            className="mt-4"
            show={this.about.state.show}
            onHide={this._handleClose}
          >
            <Modal.Header closeButton>
              <Modal.Title>Editar Usuario</Modal.Title>
            </Modal.Header>
            <Form
              onSubmit={this.handleSubmit}
              className="justify-content-center m-4"
            >
              <Form.Group as={Row} controlId="formPlaintextEmail">
                <Form.Label column sm="2" md="2">
                  Nombre
                </Form.Label>
                <Col sm="10" md="10">
                  <Form.Control
                    type="text"
                    onChange={this._handleChange}
                    name="first_name"
                    value={this.about.state.user.first_name}
                  />
                </Col>
              </Form.Group>

              <Form.Group as={Row} controlId="formPlaintextEmail">
                <Form.Label column sm="2" md="2">
                  Apellido
                </Form.Label>
                <Col sm="10" md="10">
                  <Form.Control
                    type="text"
                    onChange={this._handleChange}
                    name="last_name"
                    value={this.about.state.user.last_name}
                  />
                </Col>
              </Form.Group>

              <Form.Group as={Row} controlId="formPlaintextEmail">
                <Form.Label column sm="2" md="2">
                  Correo
                </Form.Label>
                <Col sm="10" md="10">
                  <Form.Control
                    type="email"
                    onChange={this._handleChange}
                    name="email"
                    value={this.about.state.user.email}
                  />
                </Col>
              </Form.Group>
              <Form.Group as={Row} controlId="formPlaintextEmail">
                <Form.Label column sm="2" md="2">
                  Género
                </Form.Label>
                <Col sm="10" md="10">
                  <Form.Control
                    type="text"
                    onChange={this._handleChange}
                    name="gender"
                    value={this.about.state.user.gender}
                  />
                </Col>
                <Modal.Footer>
                  <Button variant="secondary" onClick={this._handleClose}>
                    Close
                  </Button>
                  <Button type="submite" variant="primary" onClick={this._handleClose}>
                    Save Changes
                  </Button>
                </Modal.Footer>
              </Form.Group>
            </Form>
          </Modal>
        </Container>
      </>
    );
  }
}
export default Edit;
