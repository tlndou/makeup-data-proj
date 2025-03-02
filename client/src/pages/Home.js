import "../styles/home.scss";
import Searchbar from "../components/Searchbar.js";
import { Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Home() {

  const [count, setCount] = useState(0);
  const [array, setArray] = useState([]);

  const fetchAPI = async () => {
    const response = await axios.get("http://localhost:8080/api");
    setArray(response.data.product);
    console.log(response.data.product);
  };

  useEffect(() => {
    fetchAPI();
  }, []);

  return (
    <div className="home">
      <div className="home-text">
        <h1>The beauty algorithm</h1>
        <p>Lorem ipsum odor amet, consectetuer adipiscing elit. Congue parturient consequat nascetur, facilisis in luctus augue dictum netus. Potenti morbi lacus molestie accumsan mattis aliquet dui mus. Mattis aliquet metus nullam cursus porta nam. Ullamcorper vehicula aliquet molestie imperdiet cubilia. Aliquet magna urna imperdiet ut cras. Purus habitasse molestie nibh fermentum lacinia aliquet maximus. Tristique gravida ligula velit lectus rhoncus ridiculus felis. Suscipit eleifend metus non tortor; libero justo hendrerit varius per.</p>
      </div>
      <div className="search-bar">
        <Searchbar />
      </div>
      {
        array.map((product, index) => (
          <div key={index}>
            <p>{product}</p>
            <br></br>
          </div>
        ))
      }
    </div>
  );
}
