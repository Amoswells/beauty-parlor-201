import React, { useEffect, useState, useCallback } from "react";
import { toast } from "react-toastify";
import Loader from "../utils/Loader";
import { Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { NotificationSuccess, NotificationError } from "../utils/Notifications";

import {
  getServices as getServiceList,
  bookAppointment,
} from "../../utils/palor";
import { getClientByPrincipal, getClients as getclientList, createClient  } from "../../utils/client";
import Cservice from "./Service";
import Book from "./BookApointment";
import AddUser from "../client/AddUser";

const Cservices = () => {
  const [services, setServices] = useState([]);
  const [clients, setClients] = useState([]);
  const [client, setClient] = useState({});
  const [loading, setLoading] = useState(false);

  const getAllClients = useCallback(async () => {
    try {
      setLoading(true);
      setClients(await getclientList());
    } catch (error) {
      console.log({ error });
    } finally {
      setLoading(false);
    }
  });
  [];

  const getClient = useCallback(async () => {
    try {
      setLoading(true);
      setClient(await getClientByPrincipal());
    } catch (error) {
      console.log({ error });
    } finally {
      setLoading(false);
    }
  });

  const getServices = useCallback(async () => {
    try {
      setLoading(true);
      setServices(await getServiceList());
    } catch (error) {
      console.log({ error });
    } finally {
      setLoading(false);
    }
  });

  const addClient = async (Client) => {
    try {
      setLoading(true);
      createClient(Client).then((resp) => {
        getAllClients();
      });
      toast(<NotificationSuccess text="Client added successfully." />);
    } catch (error) {
      console.log({ error });
      toast(<NotificationError text="Failed to add client." />);
    } finally {
      setLoading(false);
    }
  };


  const book = async (Booking) => {
    try {
      setLoading(true);
      bookAppointment(Booking).then((resp) => {
        getServices();
      });
      toast(<NotificationSuccess text="Appointment booked successfully." />);
    } catch (error) {
      console.log({ error });
      toast(<NotificationError text="Failed to book appointment." />);
    } finally {
      setLoading(false);
    }
  };


  useEffect(() => {
    getAllClients();
    getClient();
    getServices();
  }, []);

  return (
    <>
      {!loading ? (
        !client?.name ? (
          <AddUser save={addClient}/>
        ) : (
          <>
            <div className="d-flex justify-content-between align-items-center mb-4">
              <h1 className="fs-4 fw-bold mb-0">Services offered</h1>
            
            </div>
            <Row xs={1} sm={2} lg={3} className="">
              {services.map((_cservice, index) => (
                <Cservice
                  key={index}
                  service={{
                    ..._cservice,
                  }}
                  // book={book}
                />
              ))}
            </Row>
             <div>
      {client?.name ? (
        <div>
          <h1>Client</h1>
          <p>Name: {client.name}</p>
          <p>Email: {client.email}</p>
          <p>Phone: {client.phoneNo}</p>
          <p>Address: {client.address}</p>

          <h1>Appointments</h1>
          {client.appointment.map((appointment, index) => (
            <p key={index}>{appointment}</p>
          ))}
        </div>

        ) : (
          <p>No client</p>
        )}
          </div>
          </>
        )
      ) : (
        <Loader />
      )}
    </>
  );
};

export default Cservices;
