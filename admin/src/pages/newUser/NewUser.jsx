import { useState } from "react";
import "./newUser.css";
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import axios from "axios";
import { useHistory } from "react-router-dom";

export default function NewUser() {
  const history = useHistory();
  const [user, setUser] = useState({
    firstname: "",
    lastname: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    usertype: "",
  });

  const validateForm = () => {
    const { username, password, confirmPassword } = user;
    if (username.length < 5) {
      alert("Username should have atleast 5 characters");
      return false;
    }
    if (password.length < 5) {
      alert("Password should have atleast 5 characters");
      return false;
    }
    if (password !== confirmPassword) {
      alert("Password and Confirm Password should have same characters");
      return false;
    }
    return true;
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      if (user.usertype === "Seller") {
        await axios.post("http://localhost:5000/users", {
          firstname: user.firstname,
          lastname: user.lastname,
          username: user.username,
          email: user.email,
          password: user.password,
          confirmPassword: user.confirmPassword,
          usertype: user.usertype,
          cart: [],
          products: [],
          status: "active",
          transaction: 0,
        });
      } else {
        await axios.post("http://localhost:5000/users", {
          firstname: user.firstname,
          lastname: user.lastname,
          username: user.username,
          email: user.email,
          password: user.password,
          confirmPassword: user.confirmPassword,
          usertype: user.usertype,
          cart: [],
          status: "active",
          transaction: 0,
        });
      }

      setUser({
        firstname: "",
        lastname: "",
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
        usertype: "",
      });

      alert("User created successfully");
      history.push("/users");
    }
  };

  return (
    <>
      <Topbar />
      <div className="container">
        <Sidebar />
        <div className="newUser">
          <h1 className="newUserTitle" style={{ color: "darkblue" }}>
            New User
          </h1>
          <div>
            <form className="newUserForm" onSubmit={submitHandler}>
              <div className="newUserItem">
                <label>Firstname</label>
                <input
                  type="text"
                  placeholder="Firstname"
                  value={user.firstname}
                  onChange={(e) => {
                    setUser({ ...user, firstname: e.target.value });
                  }}
                  required
                />
              </div>
              <div className="newUserItem">
                <label>Lastname</label>
                <input
                  type="text"
                  placeholder="Lastname"
                  value={user.lastname}
                  onChange={(e) => {
                    setUser({ ...user, lastname: e.target.value });
                  }}
                  required
                />
              </div>
              <div className="newUserItem">
                <label>Username</label>
                <input
                  type="text"
                  placeholder="Username"
                  value={user.username}
                  onChange={(e) => {
                    setUser({ ...user, username: e.target.value });
                  }}
                  required
                />
              </div>
              <div className="newUserItem">
                <label>Email</label>
                <input
                  type="email"
                  placeholder="Email"
                  value={user.email}
                  onChange={(e) => {
                    setUser({ ...user, email: e.target.value });
                  }}
                  required
                />
              </div>
              <div className="newUserItem">
                <label>Password</label>
                <input
                  type="text"
                  placeholder="password"
                  value={user.password}
                  onChange={(e) => {
                    setUser({ ...user, password: e.target.value });
                  }}
                  required
                />
              </div>
              <div className="newUserItem">
                <label>Re-Type Password</label>
                <input
                  type="password"
                  placeholder="re-type password"
                  value={user.confirmPassword}
                  onChange={(e) => {
                    setUser({ ...user, confirmPassword: e.target.value });
                  }}
                  required
                />
              </div>
              {/* <div className="newUserItem">
                <label>Phone</label>
                <input type="text" placeholder="+1 123 456 78" />
              </div>
              <div className="newUserItem">
                <label>Address</label>
                <input type="text" placeholder="New York | USA" />
              </div> */}
              <div className="newUserItem">
                <label>Usertype</label>
                <div className="newUserGender">
                  <input
                    type="radio"
                    name="usertype"
                    value="Seller"
                    onChange={(e) => {
                      setUser({ ...user, usertype: e.target.value });
                    }}
                    required
                  />
                  <label>Seller</label>
                  <input
                    type="radio"
                    name="usertype"
                    value="Consumer"
                    onChange={(e) => {
                      setUser({ ...user, usertype: e.target.value });
                    }}
                    required
                  />
                  <label>Consumer</label>
                </div>
              </div>
              <br />
              <div className="newUserItem">
                <button className="newUserButton">Create User</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
