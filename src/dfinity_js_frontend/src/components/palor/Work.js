import React, { useEffect, useState, useCallback } from "react";
import { toast } from "react-toastify";
import Loader from "../utils/Loader";
import { Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { NotificationSuccess, NotificationError } from "../utils/Notifications";

import {
  createService,
  getServices as getServiceList,
  getService,
  bookAppointment,
} from "../../utils/palor";
import Appointment from "./Appointment";
import Service from "./Service";
import AddService from "./Addservice";

const Work = () => {
  const [work, setWork] = useState([]);
  const [loading, setLoading] = useState(false);

  const getServices = useCallback(async () => {
    try {
      setLoading(true);
      setWork(await getServiceList());
    } catch (error) {
      console.log({ error });
    } finally {
      setLoading(false);
    }
  });

  const addService = useCallback(async () => {
    try {
      setLoading(true);
      createService().then((resp) => {
        getServices();
      });
      toast(<NotificationSuccess text="Service added successfully." />);
    } catch (error) {
      console.log({ error });
      toast(<NotificationError text="Failed to create a service." />);
    } finally {
      setLoading(false);
    }
  });


  // const update = async (data) => {
  //   try {
  //     setLoading(true);
  //     updateLanguage(data).then((resp) => {
  //       getLanguages();
  //       toast(<NotificationSuccess text="Language Added." />);
  //     });
  //   } catch (error) {
  //     console.log({ error });
  //     toast(<NotificationError text="Failed to add language." />);
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  useEffect(() => {
    getServices();
  }, []);

  return (
    <>
      {!loading ? (
        <>
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h1 className="fs-4 fw-bold mb-0">Services</h1>
           <div><AddService save={addService}/></div>

            {/* <Link
              to="/users?canisterId=br5f7-7uaaa-aaaaa-qaaca-cai"
              className="justify-content-start mr-4 py-2 px-3 my-2 bg-secondary text-white rounded-pill "
            >
              Users Page
            </Link> */}
          </div>
          <Row xs={1} sm={2} lg={3} className="">
            {work.map((_work, index) => (
              <Service
                key={index}
                work={{
                  ..._work,
                }}
                // unenroll={unenroll}
              />
            ))}
          </Row>
        </>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default Work;
