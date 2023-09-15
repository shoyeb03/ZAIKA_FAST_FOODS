
// import React from "react";
// import { Link } from "react-router-dom";

// export default function Footer() {
//   return (
//     <footer className="d-flex flex-column align-items-center py-3 my-4 border-top">
//       <div className="text-center m-5">
//         <h4>About Us</h4>
//         <p>
//           At Zaika Fast Food, we're passionate about delivering exceptional taste with every bite. Our menu showcases a fusion of flavors, prepared with care and served promptly. We invite you to savor our delicious offerings, experience our warm hospitality, and make Zaika Fast Food your preferred culinary destination.
//         </p>
//       </div>

//       <div className="col-md-4 d-flex align-items-center justify-content-center">
//         <Link
//           to="/"
//           className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1"
//         ></Link>
//         <span className="text-muted">© 2023 ZAIKA FAST FOODS</span>
//       </div>

    
//     </footer>
//   );
// }


import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="d-flex flex-column align-items-center py-3 my-4 border-top">
      <div className="text-center m-3">
        <h4>About Us</h4>
        <p>
          At Zaika Fast Food, we're passionate about delivering exceptional taste with every bite. Our menu showcases a fusion of flavors, prepared with care and served promptly. We invite you to savor our delicious offerings, experience our warm hospitality, and make Zaika Fast Food your preferred culinary destination.
        </p>
      </div>

      <div className="col-md-4 d-flex flex-column align-items-center">
        <Link
          to="/"
          className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1"
        ></Link>
        <span className="text-muted">
          ©2023 ZAIKA FAST FOODS
          <br />
          <br />
           Made with ❤ by Shoyeb
        </span>
      </div>

      <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
        {/* Add your social media links here */}
      </ul>
    </footer>
  );
}
