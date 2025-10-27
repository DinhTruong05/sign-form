import React, { Component } from "react";
import "./App.css";
import Home from "./Home";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      form: { email: "", password: "", isRemember: false },
      isValid: false,
      isLoggedIn: false,
    };
  }

  // Xử lý thay đổi input
  handleChange = (event) => {
    this.setState(
      (state) => {
        const { form } = state;
        form[event.target.name] = event.target.value;
        return { form };
      },
      () => this.checkValidForm()
    );
  };

  // Xử lý checkbox
  handleChangeCheckbox = () => {
    this.setState(
      (state) => {
        const { form } = state;
        form.isRemember = !form.isRemember;
        return { form };
      },
      () => this.checkValidForm()
    );
  };

  // Kiểm tra hợp lệ form
  checkValidForm = () => {
    const { email, password } = this.state.form;
    const value = email && password;
    this.setState({ isValid: value });
  };

  // Gửi form đăng nhập
  handleSubmit = () => {
    if (this.state.isValid) {
      this.setState({ isLoggedIn: true });
    } else {
      alert("Vui lòng nhập đủ email và mật khẩu!");
    }
  };

  // Đăng xuất
  handleLogOut = () => {
    this.setState({
      isLoggedIn: false,
      form: { email: "", password: "", isRemember: false },
      isValid: false,
    });
  };

  render() {
    const { isLoggedIn, form } = this.state;

    if (isLoggedIn) {
      return <Home onLogOut={this.handleLogOut} />;
    }

    return (
      <div className="container d-flex align-items-center justify-content-center text-center vh-100">
        <div className="form-signin shadow p-4 rounded bg-light">
          <form>
            <img
              className="mb-4"
              src="https://upload.wikimedia.org/wikipedia/commons/b/b2/Bootstrap_logo.svg"
              alt="Bootstrap Logo"
              width="72"
              height="57"
            />
            <h1 className="h3 mb-3 fw-normal text-dark">Please sign in</h1>

            <div className="form-floating mb-3">
              <input
                className="form-control"
                type="email"
                name="email"
                placeholder="name@example.com"
                value={form.email}
                onChange={this.handleChange}
              />
              <label>Email address</label>
            </div>

            <div className="form-floating mb-3">
              <input
                className="form-control"
                type="password"
                name="password"
                placeholder="Password"
                value={form.password}
                onChange={this.handleChange}
              />
              <label>Password</label>
            </div>

            <div className="checkbox mb-3">
              <label>
                <input
                  type="checkbox"
                  checked={form.isRemember}
                  onChange={this.handleChangeCheckbox}
                />{" "}
                Remember me
              </label>
            </div>

            <button
              className="w-100 btn btn-lg btn-primary"
              type="button"
              onClick={this.handleSubmit}
            >
              Sign in
            </button>
            <p className="mt-5 mb-3 text-muted">© 2021–2025</p>
          </form>
        </div>
      </div>
    );
  }
}

export default App;
