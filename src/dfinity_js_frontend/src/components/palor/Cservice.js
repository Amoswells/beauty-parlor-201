import React from "react";
import PropTypes from "prop-types";
import { Card, Col, Badge, Stack } from "react-bootstrap";

const Cservice = ({ service }) => {
  const {  name, description, price } = service;
  

  //   const triggerEnroll = (userId) => {
  //     enroll({
  //       userId,
  //       languageId: id,
  //     });
  //   };

  //   const triggerUnenroll = (userId) => {
  //     unenroll({
  //       userId,
  //       languageId: id,
  //     });
  //   };

  return (
    <Col md={4} className="mb-4">
      <Card className=" position-relative">
        <Card.Body>
          <>
       
            <Card.Title>{name}</Card.Title>
            <Card.Text>{description}</Card.Text>
            <Card.Text>{price}</Card.Text>
          </>

          {/* <Card.Footer className="d-flex justify-content-between">
            <Enroll enroll={triggerEnroll} />
            <Unenroll unenroll={triggerUnenroll} />
          </Card.Footer> */}
        </Card.Body>
        <h1>book</h1>
      </Card>
    </Col>
  );
};

Cservice.propTypes = {
  service: PropTypes.object.isRequired,
};

export default Cservice;
