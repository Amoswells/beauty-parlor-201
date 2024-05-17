import React, { useEffect, useState, useCallback } from "react";
import { toast } from "react-toastify";
import Loader from "../utils/Loader";
import { Row } from "react-bootstrap";

import { NotificationSuccess, NotificationError } from "../utils/Notifications";

import {
  getServices as getServiceList,
  bookAppointment,
} from "../../utils/palor";
import {
  getClientByPrincipal,
  getClients as getclientList,
  createClient,
} from "../../utils/client";
import Cservice from "./Service";
import User from "./User";



const Cservices = () => {
  const [services, setServices] = useState([]);
  const [client, setClient] = useState({});
  const [clients, setClients] = useState([]);
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
                book={book}
              />
            ))}
          </Row>
          <div>
          {clients.map((_client, index) => (
            <User
              key={index}
              client={{
                ..._client,
              }}
           
            />
          ))}
          </div>
        </>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default Cservices;
