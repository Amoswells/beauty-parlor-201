import React from "react";
import PropTypes from "prop-types";
import { Card, Col, Stack } from "react-bootstrap";

//import UpdateUser from "./UpdateUser";

const User = ({ client }) => {
  const { id, name } = client;

  return (
    <Col>
      <Card className=" ">
        <Card.Body className="d-flex  flex-column">
          <Stack>
            <div className="">
            {id}
            </div>
            <Card.Title>Name: {name}</Card.Title>
          </Stack>

         
        </Card.Body>
      </Card>
    </Col>
  );
};

User.propTypes = {
  client: PropTypes.object.isRequired,
};

export default User;
