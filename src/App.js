import { Route, Routes } from 'react-router';
import Footer from './components/Footer';
import MovieList from './components/MovieList';
import ScrollToTop from './components/ScrollToTop';
import logo from './images/logo.png';

function App() {
  return (
    <div className="App">
      <div className="container-fluid">
        <nav className="navbar navbar-expand-lg px-3">
          <a className="navbar-brand" href=".">
            <img src={logo} alt="Logo" className="logo" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="collapse navbar-collapse justify-content-center"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav mx-auto">
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle px-3" href=".">
                  Home
                </a>
                <div className="dropdown-menu">
                  <a className="dropdown-item" href=".">
                    Home Version 1
                  </a>
                  <a className="dropdown-item" href=".">
                    Home Version 2
                  </a>
                  <a className="dropdown-item" href=".">
                    Home Version 3
                  </a>
                </div>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle px-3" href=".">
                  Pages
                </a>
                <div className="dropdown-menu">
                  <a className="dropdown-item" href=".">
                    404 Page
                  </a>
                  <a className="dropdown-item" href=".">
                    Contact Us
                  </a>
                  <a className="dropdown-item" href=".">
                    Coming Soon
                  </a>
                  <a className="dropdown-item" href=".">
                    Pricing Plan
                  </a>
                  <a className="dropdown-item" href=".">
                    Login - Register
                  </a>
                  <a className="dropdown-item" href=".">
                    Testimonials
                  </a>
                </div>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle px-3"
                  href="."
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Movies &amp; TV Shows
                </a>
                <div className="dropdown-menu">
                  <a className="dropdown-item" href=".">
                    Movie List 1
                  </a>
                  <a className="dropdown-item" href=".">
                    Movie List 2
                  </a>
                  <a className="dropdown-item" href=".">
                    Movie Grid 1
                  </a>
                  <a className="dropdown-item" href=".">
                    Movie Grid 2
                  </a>
                  <a className="dropdown-item" href=".">
                    Movie Grid 3
                  </a>
                  <a className="dropdown-item" href=".">
                    Movie Grid 4
                  </a>
                  <a className="dropdown-item" href=".">
                    Movie Detail
                  </a>
                  <a className="dropdown-item" href=".">
                    Movie Detail 2
                  </a>
                </div>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle px-3"
                  href="."
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Blog
                </a>
                <div className="dropdown-menu">
                  <a className="dropdown-item" href=".">
                    Blog List
                  </a>
                  <a className="dropdown-item" href=".">
                    Post With Gallery
                  </a>
                  <a className="dropdown-item" href=".">
                    Post With Vimeo
                  </a>
                  <a className="dropdown-item" href=".">
                    Post With Youtube
                  </a>
                  <a className="dropdown-item" href=".">
                    Post With Audio
                  </a>
                </div>
              </li>
              <li className="nav-item">
                <a className="nav-link" href=".">
                  Contact Us
                </a>
              </li>
            </ul>

            <ul className="navbar-nav extra-nav">
              <li className="nav-item me-3">
                <a className="nav-link toggle-search" href=".">
                  <i className="fa fa-search"></i>
                </a>
              </li>

              <li className="nav-item m-auto px-3 py-1">
                <a
                  href="."
                  className="btn btn-primary login-btn text-uppercase"
                >
                  <i className="far fa-user"></i> login
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      <Routes>
        <Route path="/:page" element={<MovieList />} />
        <Route path="/" element={<MovieList />} />
      </Routes>
      <ScrollToTop />
      <Footer />
    </div>
  );
}

export default App;
