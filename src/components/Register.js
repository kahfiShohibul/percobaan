import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './Register.css';

function Register() {
    return (
        <><Form>
        <Form.Group className="mb-3" controlId="formBasicjudulsignup">
        <Form.Label className="labeljudulsignup">Register</Form.Label>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicUsername">
          <Form.Label className="labelusernameregis">Username</Form.Label>
          <Form.Control className="usernameregis" type="username" placeholder="Enter Username" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label className="labelemailregis">Email</Form.Label>
          <Form.Control className="emailregis" type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label className="labelpasswordregis">Password</Form.Label>
          <Form.Control className="passwordregis" type="password" placeholder="Password" />
        </Form.Group>
        <Button className="signupregis" variant="primary" type="submit">Register</Button>
        </Form>
        <img src="images/clasic1.png" position= "absolute" width = "450px" height= "350px" alt="logo mobil clasic" class="clasic1" className="clasic1" />
        <Form.Label className="labelloginwithregis">─────────── or register with ───────────</Form.Label>
        <img src="images/google.jpg" position= "absolute" width = "42px" height= "42px" alt="logogoogleregis" class="logogoogleregis" className="logogoogleregis" />
        </>
        );
    }
    
    export default Register