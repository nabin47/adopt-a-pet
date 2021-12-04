// mostly code from reactjs.org/docs/error-boundaries.html
import { Component } from "react";
import { Link, Redirect } from "react-router-dom";

class ErrorBoundary extends Component {
  state = { hasError: false, redirect: false };
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  componentDidCatch(error, info) {
    console.error("ErrorBoundary caught an error", error, info);
    setTimeout(() => this.setState({ redirect: true }), 5000);
  }
  //   componentDidUpdate() {
  //     if (this.state.hasError) {
  //     }
  //   }
  // this approach doesn't work because componentDidUpdate cannot be called the very
  // first time it renders. So using this means we assume no error will occur in
  // first time, which is not true. Thats why setTimeout is called inside
  // componentDidCatch.
  render() {
    if (this.state.redirect) {
      return <Redirect to="/" />;
    } else if (this.state.hasError) {
      return (
        <h2>
          There was an error with this listing. <Link to="/">Click here</Link>{" "}
          to back to the home page or wait five seconds.
        </h2>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
