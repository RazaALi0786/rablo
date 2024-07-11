import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import jsonData from "../Dummy/Dummy.json";

const About = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const item = jsonData.find((item) => item.id === parseInt(id));
        if (item) {
          setData(item);
        } else {
          console.error(`No data found for ID ${id}`);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [id]);

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container">
      <div className="cards">
        <div className="card">
          <h2>Employee Name: {data.employee_name}</h2>
          <p>Employee ID: {data.id}</p>
          <p>Employee Age: {data.employee_age}</p>
          <p>Employee Salary: {data.employee_salary}</p>
        </div>
      </div>
    </div>
  );
};

export default About;
