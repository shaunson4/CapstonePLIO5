import React from "react";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import NewOfficeLocation from "../OfficeDetails/AddOfficeLocationPage";
import NewProposalForm from "../OfficeDetails/ProposalForm";
import { Link } from "react-router-dom";

import axios from "axios"

const HomePage = () => {
  // The "user" value from this Hook contains the decoded logged in user information (username, first name, id)
  // The "token" value is the JWT token that you will send in the header of any request requiring authentication
  //TODO: Add an AddOffices Page to add a car for a logged in user's garage
  const [user, token] = useAuth();
  const [cars, setCars] = useState([]);
  const [offices, setOffices] = useState([]);
  const [proposals, setProposals] = useState([]);

  useEffect(() => {
    const fetchOffices = async () => {
      try {
        let response = await axios.get("http://127.0.0.1:8000/api/alloffices/", {
          headers: {
            Authorization: "Bearer " + token,
          },
        });
        setOffices(response.data);
      } catch (error) {
        console.log(error.response.data);
      }
    };
    fetchOffices();
  }, [token]);
  return (
    <div className="container">
      <h1>Home Page for {user.username}!</h1>
      <Link to="addofficelocation">Add Office Location!</Link>
      <Link to="/addproposal">Add Proposal!</Link>

      {offices &&
        offices.map((office) => (
          <p key={office.id}>
            {office.buildingName} {office.address} {office.lati} {office.longi}
          </p>
        ))}
        <NewOfficeLocation/>
        <NewProposalForm/>
        <Map location={location} zoomLevel={17} offices={offices} />
    </div>
  );
};

export default HomePage;
