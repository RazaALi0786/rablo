import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Cards.css";
import jsonData from "../Dummy/Dummy.json";

function Cards() {
  const navigate = useNavigate();
  const [data, setData] = useState(jsonData);
  const [searchId, setSearchId] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://dummy.restapiexample.com/api/v1/employees"
        );
        if (!response.ok) {
          throw new Error("Error fetching data");
        }
        const jsonData = await response.json();
        setData(jsonData.data);
        console.log("Fetched data:", jsonData.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleClick = (item) => {
    navigate(`/details/${item.id}`);
  };
  const handleDelete = (id) => {
    setData((prevData) => prevData.filter((item) => item.id !== id));
    console.log(`Deleted employee with ID ${id}`);
  };

  const handleSearch = () => {
    const filteredData = data.filter((item) => item.id === parseInt(searchId));
    setData(filteredData);
    console.log(`Searched for employee with ID ${searchId}`);
  };

  return (
    <div className="container">
      <div className="input-container">
        <input
          type="text"
          placeholder="Enter Employee ID"
          value={searchId}
          onChange={(e) => setSearchId(e.target.value)}
          className="input"
        />
        <button className="button" onClick={handleSearch}>
          Search
        </button>
      </div>
      <div className="cards">
        {data.map((item) => (
          <div key={item.id} className="card">
            <h2>{item.employee_name}</h2>
            <p>Age: {item.employee_age}</p>
            <button className="button" onClick={() => handleDelete(item.id)}>
              Delete
            </button>
            <button className="button">Edit</button>
            <button className="button" onClick={() => handleClick(item)}>
              View
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cards;
