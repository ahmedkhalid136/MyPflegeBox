import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

import "./Header.css";
export default function Header(props) {
  const [Active, setActive] = useState("");
  useEffect(() => {
    if (props.title == "whymypflegebox") setActive("2");
    else if (props.title == "Home") setActive("1");
    else if (props.title == "BLOG") setActive("3");
    else if (props.title == "FAQ") setActive("4");
  });

  return (
    <div style={{ backgroundColor: "#ffffff" }}>
      <div className="container">
        <nav class="navbar navbar-expand-lg navbar-light">
          <a class="navbar-brand" href="#">
            myPflegebox
          </a>

          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav ms-auto navbarLinks">
              <Link
                className={
                  Active == "1"
                    ? "nav-item nav-link class-active"
                    : "nav-item nav-link"
                }
                to="/Homepage"
              >
                <p>HOME</p>
              </Link>
              <Link
                className={
                  Active == "2"
                    ? "nav-item nav-link class-active"
                    : "nav-item nav-link"
                }
                to="/whymypflegebox"
              >
                <p> WHY MY PFLEGE BOX</p>
              </Link>
              <Link
                className={
                  Active == "3"
                    ? "nav-item nav-link class-active"
                    : "nav-item nav-link"
                }
                to="/blogdetails"
              >
                <p>BLOG</p>
              </Link>
              <Link
                className={
                  Active == "4"
                    ? "nav-item nav-link class-active"
                    : "nav-item nav-link"
                }
                to="/FAQ"
              >
                <p>FAQ</p>
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}
