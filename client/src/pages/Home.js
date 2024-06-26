import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import ProgressChart from "../components/ProgressChart";
import Calendar from "../components/Calendar";
import Schedule from "../components/Schedule";
import AttendanceHistogram from "../components/AttendanceHistogram";
import CoursePieChart from "../components/CoursePieChart";
import Download from "../components/Download";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faVideo, faBullhorn } from "@fortawesome/free-solid-svg-icons";

const Home = () => {
  const [userData, setUserData] = useState(null);
  const [attendanceData, setAttendanceData] = useState([]);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const url =
          // https://edconnect-dashboard-backend.vercel.app
          "https://academics-2rs9.onrender.com//api/user/65ec332f92ffe03ab5dcfdf0";
        console.log("Fetching user data from:", url);
        const response = await axios.get(url);
        setUserData(response.data);
        setAttendanceData(response.data.Courses);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, []);

  return (
    <div className="home-container">
      <div className="content-container">
        <div className="welcome-container">
          <div className="welcome-box">
            <h2>Welcome to College Dashboard</h2>
          </div>
        </div>
        <div className="calendar-container">
          <Calendar />
        </div>

        <div className="picture-container">
          <Schedule />
        </div>
        <div className="picture-container">
          <Download />
        </div>
        <div className="schedule-container">
          <div className="schedule-box">
            <div className="schedule-item">
              <h4>
                <FontAwesomeIcon icon={faBullhorn} /> Quick updates from teacher
              </h4>
              <p>Quick updates from teacher</p>
            </div>
            <div className="schedule-item">
              <h4>
                <FontAwesomeIcon icon={faVideo} /> Online Lecture Link
              </h4>
              <a href="https://edconnect-meeting.vercel.app/"> Lecture Link</a>
            </div>
            <div className="schedule-item">
              <h4>
                <FontAwesomeIcon icon={faBell} /> Notifications
              </h4>
              <p>Notifications from teacher or chatting app</p>
            </div>
          </div>
        </div>
      </div>
      <div className="boxes-container">
        <div className="box">
          <Link to="https://attendance-kappa-smoky.vercel.app/">
            <h3>Attendance</h3>
            <img src={require('../assets/academics.gif')} alt="TO-DO" />
          </Link>
        </div>
        <div className="box">
          <h3>Assignments</h3>
          <Link to="https://assignments-edconnect.vercel.app/">
            <img src={require('../assets/imagee3.gif')} alt="Assignment" />
          </Link>
        </div>
        <div className="box">
          <h3>TO-DO</h3>
          <Link to="https://mern-todo-roan.vercel.app/">
            <img src={require('../assets/TO.gif')} alt="TO-DO" />
          </Link>
        </div>
        <div className="box">
          <h3>Progress Chart</h3>
          <Link to="http://progress-chart.vercel.app/">
            <img src={require('../assets/progress.gif')} alt="Material" />
            </Link>
          {/* <ProgressChart courses={attendanceData} /> */}
        </div>
        <div className="box">
          <h3>Material</h3>
          <Link to="https://study-material-edconnnect.vercel.app/">
            <img src={require('../assets/imagee1.gif')} alt="Material" />
          </Link>
        </div>
        <div className="box">
          <h3>Notice Board</h3>
          <Link to="https://notice-board-nine.vercel.app/">
            <img src={require('../assets/imagee2.gif')} alt="Notice Board" />
          </Link>
        </div>
        {/* <div className="box">
          <h3>Admit Card</h3>
          <Link to="https://admitcard-edconnect.vercel.app//">
            <img src={require('../assets/imagee2.gif')} alt="Notice Board" />
          </Link>
        </div> */}
      </div>
    </div>
  );
};

export default Home;
