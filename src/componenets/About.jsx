import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./About.css";
const About = () => {
  const { id } = useParams();
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://dummy.restapiexample.com/api/v1/employee/${id}`
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
  }, [id]);

  return (
    <div className="container">
      <div className="cards">
        <div className="card">
          {data && <h2>Employee Name: {data.employee_name}</h2>}
          {data && <p>Employee ID: {data.id}</p>}
          {data && <p>Employee Age: {data.employee_age}</p>}
          {data && <p>Employee Salary: {data.employee_salary}</p>}
        </div>
      </div>
    </div>
  );
};

export default About;
