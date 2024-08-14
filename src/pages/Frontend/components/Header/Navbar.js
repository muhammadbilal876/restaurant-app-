// import { AuthContext } from '../../../../context/AuthContext';
// import React, { useContext } from 'react';
// import { Link } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

// export default function Navbar() {

//   const navigate = useNavigate();
//   const { isAuthenticated, setIsAuthenticated } = useContext(AuthContext);
//   console.log(isAuthenticated);

//   const handleLogout = () => {
//     setIsAuthenticated(false);
//     navigate('/');
//   };

//   return (
//     <nav className="navbar navbar-expand-lg bg-light navbar-light">
//       <div className="container">
//         <Link to='/' className="navbar-brand p-2">Navbar</Link>
//         <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//           <span className="navbar-toggler-icon"></span>
//         </button>
//         <div className="collapse navbar-collapse" id="navbarSupportedContent">
//           <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//             <li className="nav-item">
//               <Link to='/home' className="nav-link active">Home</Link>
//             </li>
//             <li className="nav-item">
//               <Link to='/about' className="nav-link active">About</Link>
//             </li>
//             <li className="nav-item">
//               <Link to='/dashboard' className="nav-link active">Dashboard</Link>
//             </li>
//           </ul>
//           <form className="d-flex align-items-center">
//             {!isAuthenticated
//               ? <Link to='/authentication/login' className="loginBtn">Login</Link>
//               : (
//                 <>
//                   <Link to='/dashboard/cart' className="btn btn-sm me-2 loginBtn">
//                     <FontAwesomeIcon icon={faShoppingCart} />
//                     <span className="ms-2">Cart</span>
//                   </Link>
//                   <button className='btn btn-sm btn-danger text-white' onClick={handleLogout}>Logout</button>
//                 </>
//               )}
//           </form>
//         </div>
//       </div>
//     </nav>
//   );
// }


























import { AuthContext } from '../../../../context/AuthContext';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

export default function Navbar() {
  const navigate = useNavigate();
  const { isAuthenticated, setIsAuthenticated } = useContext(AuthContext);
  console.log(isAuthenticated);

  const handleLogout = () => {
    setIsAuthenticated(false);
    navigate('/');
  };

  return (
    <nav className="navbar navbar-expand-lg bg-light navbar-light shadow sticky-top">
      <div className="container">
        <Link to='/' className="navbar-brand p-2">Navbar</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to='/home' className="nav-link active">Home</Link>
            </li>
            <li className="nav-item">
              <Link to='/about' className="nav-link active">About</Link>
            </li>
            <li className="nav-item">
              <Link to='/dashboard' className="nav-link active">Dashboard</Link>
            </li>
          </ul>
          <form className="d-flex align-items-center">
            {!isAuthenticated
              ? <Link to='/authentication/login' className="loginBtn">Login</Link>
              : (
                <>
                  <Link to='/dashboard/cart' className="btn btn-sm me-2 loginBtn">
                    <FontAwesomeIcon icon={faShoppingCart} />
                    <span className="ms-2">Cart</span>
                  </Link>
                  <button className='btn btn-sm btn-danger text-white' onClick={handleLogout}>Logout</button>
                </>
              )}
          </form>
        </div>
      </div>
    </nav>
  );
}
