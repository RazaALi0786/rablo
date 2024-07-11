import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

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
    <div>
      <h1>{data.employee_name}</h1>
      <p>Employee ID: {data.id}</p>
      <p>Employee Age: {data.employee_age}</p>
      <p>Employee Salary: {data.employee_salary}</p>
    </div>
  );
};

export default About;
