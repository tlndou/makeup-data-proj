import React, { useEffect } from "react";
import "../styles/navbar.scss";

export default function Navbar() {
  useEffect(() => {
    const handleClick = (e) => {
      const isDropdownButton = e.target.matches("[data-dropdown-link]");
      let currentDropdown;

      if (isDropdownButton) {
        currentDropdown = e.target.closest("[data-dropdown]");
        currentDropdown.classList.toggle("active");
      }

      // Close all other dropdowns
      document
        .querySelectorAll("[data-dropdown].active")
        .forEach((dropdown) => {
          if (dropdown !== currentDropdown) {
            dropdown.classList.remove("active");
          }
        });
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return (
    <div className="navbar">
      <ul>
        <li>
          <a href="/">The Beauty Algorithm</a>
        </li>

        {/* Dropdown */}
        <li className="occasion-dropdown" data-dropdown>
          <a href="#" className="occasion-link" data-dropdown-link>
            Occasion
          </a>
          <ul className="occasion-dropdown-menu">
            <li>
              <a href="#">#cleangirl</a>
            </li>
            <li>
              <a href="#">date night</a>
            </li>
            <li>
              <a href="#">girls night out</a>
            </li>
            <li>
              <a href="#">bridal</a>
            </li>
            <li>
              <a href="#">work</a>
            </li>
          </ul>
        </li>

        <li>
          <a href="trendingnow">Trending & Blending</a>
        </li>
        <li>
          <a href="timemachine">By the Decade</a>
        </li>
        <li>
          <a href="trendpredictor">Coming Up</a>
        </li>
      </ul>

      <div className="user-buttons">
        <button>Login</button>
      </div>
    </div>
  );
}
