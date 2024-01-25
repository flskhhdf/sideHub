import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useState } from 'react';
import { Modal_Login, Modal_Signup } from './modal';

function App() {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);

  const handleClose = () => {setShowLogin(false); setShowSignup(false);}
  const handleShowLogin = () => setShowLogin(true);
  const handleShowSignup = () => setShowSignup(true);

  return (
    <div className="App">
      <Navbar data-bs-theme="light" id="top-navbar">
        <Container>
          <Navbar.Brand href="#home">SideHub</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#project">프로젝트</Nav.Link>
            <Nav.Link href="#portfolio">포트폴리오</Nav.Link>
            <Nav.Link href="#study">스터디</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link onClick={handleShowLogin}>로그인</Nav.Link>
            <Nav.Link onClick={handleShowSignup}>회원가입</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <div id="top-content--header">
        <div className="content__box">
          <p className="content__text">우리들의 프로젝트 중심지, <b>SideHub</b></p>
          <p>대학생을 위한 커뮤니티 기반 프로젝트 플랫폼</p>
          <Button variant="secondary">프로젝트 참여하기</Button>{' '}
          <Button variant="secondary">프로젝트 만들기</Button>{' '}
        </div>

        <Modal_Login
          show={showLogin}
          handleClose={handleClose}
        />
        <Modal_Signup
          show={showSignup}
          handleClose={handleClose}
        />
      </div>
    </div>
  );
}

export default App;
