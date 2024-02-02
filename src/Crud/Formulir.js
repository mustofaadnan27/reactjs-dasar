import React from "react";
import {
  Button,
  Col,
  Form,
  FormGroup,
  Input,
  Label,
  Row,
} from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";

//  const Formulir = ( name, desc, harga, handleChange, handleSubmit ) => {
    // return(
    //   <div>{props.myProp}</div>
    // ) }

// karena menggunakan fuctional component maka untuk mendapatkan datanya tidak perlu menggunakan this.prop langsung saja diparameter dengan destructing {} untuk mengakses property scara langsung

const Formulir = ({ name, desc, harga, handleChange, handleSubmit, title, id }) => {
  return (
    <div className="mt-3">
      <Row>
        <Col className="col-md-8">
          <h2>{id ? "Edit Data" : "Tambah Data"}</h2>
        </Col>
      </Row>
      <Row>
        <Col className="col-md-8">
          <Form onSubmit={handleSubmit}>
            <FormGroup>
              <Label for="name">Nama Makanan :</Label>
              <Input
                type="text"
                placeholder="name"
                id="name"
                name="name"
                required
                value={name}
                onChange={(event) => handleChange(event)}
              />
            </FormGroup>

            <FormGroup>
              <Label for="desc">Deskripsi :</Label>
              <Input
                type="textarea"
                name="desc"
                id="desc"
                placeholder="desc"
                value={desc}
                onChange={(event) => handleChange(event)}
              />
            </FormGroup>

            <FormGroup>
              <Label for="harga">Harga :</Label>
              <Input
                type="number"
                name="harga"
                id="harga"
                placeholder="harga"
                value={harga}
                onChange={(event) => handleChange(event)}
              />
            </FormGroup>
            <Button type="submit" variant="primary">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </div>
  );
};

export default Formulir;
