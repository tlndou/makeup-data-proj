import "../styles/navbar.scss";

export default function Navbar() {
  return (
    <div className="navbar">
      <li>
        <a href="/">The beauty algorithm</a>
      </li>
      <li>
        <a href="#">Occasion</a>
      </li>
      <li>
        <a href="trendingnow">Trending&Blending</a>
      </li>
      {/* <li>
        <a href="search">Search</a>
      </li> */}
      <li>
        <a href="timemachine">By the decade</a>
      </li>
      <li>
        <a href="trendpredictor">Coming up</a>
      </li>
      
      <div className="user-buttons">
        <button>Login</button>
      </div>
    </div>
  );
}
