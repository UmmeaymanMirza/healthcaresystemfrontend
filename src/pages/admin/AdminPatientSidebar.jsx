import React, { useState } from "react";
import Footer from "../../component/footer";
import "../../styles/sidebar.css";
import { Container, Row, Col, Nav, Navbar } from "react-bootstrap";
import {
  HouseDoorFill,
  Calendar,
  Person,
  ChatSquareDots,
  BoxArrowRight,
} from "react-bootstrap-icons";
import { useNavigate } from "react-router-dom";


// Import individual content components
import Patients from "./AdminPatients";

function AdminPatientSidebar() {
   const nav = useNavigate();
  const [activeMenuItem, setActiveMenuItem] = useState("dashboard");

   const loginOut = () => {
     localStorage.removeItem("loginToken")
     nav("/login")
   };
 
  
  return (
    <div className="sidebar-container">
      {/* <Header /> */}
      <Container fluid>
        <Row>
          {/* Vertical Navbar */}
          <Col md={2} className="sidebar">
            <Navbar expand="md">
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="flex-column custom-nav">
                  <Nav.Link href="/admin">
                    <HouseDoorFill /> Dashboard
                  </Nav.Link>
                  <Nav.Link href="/appointments">
                    <Calendar /> Appointments
                  </Nav.Link>
                  <Nav.Link href="/patients" className="active-link">
                    <Person /> Patients
                  </Nav.Link>
                  <Nav.Link href="/doctors">
                    <ChatSquareDots /> Doctors
                  </Nav.Link>
                  <Nav.Link href="/users">
                    <ChatSquareDots /> Users
                  </Nav.Link>
                  <Nav.Link href="#" onClick={() => loginOut()}>
                    <BoxArrowRight /> Logout
                  </Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
          </Col>

          {/* Main Content */}
          <Col md={10} className="p-4">
            {/* Render content based on the activeMenuItem */}
            <Patients />,
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
}

export default AdminPatientSidebar;
