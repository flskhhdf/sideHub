import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Routes, Route, Link } from 'react-router-dom'
import './App.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useState } from 'react';
import { ModalLogin, ModalSignup } from './modal';
import Main from './pages/main';
import Project from './pages/project';
import Portfolio from './pages/portfolio';
import Study from './pages/study';

function App() {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);

  const handleClose = () => { setShowLogin(false); setShowSignup(false); }
  const handleShowLogin = () => setShowLogin(true);
  const handleShowSignup = () => setShowSignup(true);

  return (
    <div className="App">
      {/* nav start */}
      <Navbar data-bs-theme="light" id="top-navbar">
        <Container>
          <div id="logo-wrapper">
            <Link to = "/">
              <Navbar.Brand href="#home">SideHub</Navbar.Brand>
            </Link>
          </div>

          <Container id="left-nav-wrapper">
            <Nav className="me-auto">
              <Link to = "/project">
                <Nav.Link href="#project">프로젝트</Nav.Link>
              </Link>
              <Link to = "/portfolio">
                <Nav.Link href="portfolio">포트폴리오</Nav.Link>
              </Link>
              <Link to = "/study">
                <Nav.Link href="#study">스터디</Nav.Link>
              </Link>
            </Nav>
          </Container>

          <Container id="right-nav-wrapper">
            <Nav>
              <Nav.Link href="#signin" onClick={handleShowLogin}>로그인</Nav.Link>
              <Nav.Link href="#signup" onClick={handleShowSignup}>회원가입</Nav.Link>
            </Nav>
          </Container>
        </Container>
      </Navbar>
      {/* nav end */}

      <ModalLogin
        show={showLogin}
        handleClose={handleClose}
      />
      <ModalSignup
        show={showSignup}
        handleClose={handleClose}
      />

      <Routes>
        <Route
          path="/"
          element={
            <div>
              <Main />
            </div>
          }
        />
        <Route
          path="/project"
          element={
            <div>
              <Project />
            </div>
          }
        />
        <Route
          path="/portfolio"
          element={
            <div>
              <Portfolio />
            </div>
          }
        />
        <Route
          path="/study"
          element={
            <div>
              <Study />
            </div>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
