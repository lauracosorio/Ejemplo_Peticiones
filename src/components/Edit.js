import React from "react";
import { Modal, Button, Form, Row, Col, Container } from "react-bootstrap";

class Edit extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {
    //     first_name: props.about,
    //     last_name: "",
    //     email: "",
    //     gender: "",
    //   loading: true,
    //   error: null
    // };
    this.about = props.about;
  }

  // _handleShow(){
  // this.props.show()
  // }

  // _handleClose = () => {
  //   this.about.setState({ show: false })
  // }

  
  


  render() {
    console.log(this.about);
    return (
      <>
      <Container>
        <Modal className="mt-4" show={this.props.about.state.show} onHide={this._handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Editar Usuario</Modal.Title>
          </Modal.Header>
          <Form onSubmit={this._handleSubmit} className="justify-content-center m-4">
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
                // onChange={this._handleChange}
                // name="last_name"
                // value={this.about.state.user.last_name}
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
                // onChange={this._handleChange}
                // name="email"
                // value={this.about.state.user.email}
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
                // onChange={this._handleChange}
                // name="gender"
                // value={this.about.state.user.gender}
              />
            </Col>
          </Form.Group>
        </Form>
          <Modal.Footer>
            <Button variant="secondary" onClick={this._handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={this._handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
        </Container>
      </>
    );
  }
}
export default Edit;
