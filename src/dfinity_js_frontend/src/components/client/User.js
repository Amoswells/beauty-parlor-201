import React from "react";
import PropTypes from "prop-types";
import { Card, Col, Stack } from "react-bootstrap";

//import UpdateUser from "./UpdateUser";

const User = ({ client }) => {
  const { id, name } = client;

  return (
    <Col>
      <>
        <div className="pl-3">
          <Stack>
              <p>Name: {name}</p>
            <p>ID:
            {id}
            </p>
          
          </Stack>

         
        </div>
      </>
    </Col>
  );
};

User.propTypes = {
  client: PropTypes.object.isRequired,
};

export default User;
