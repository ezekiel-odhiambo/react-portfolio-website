import React, { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap"; // Assuming you're using Bootstrap for styling
import backgroundImage from "../assets/background-PNG.png";
import { Link } from "react-router-dom"; // Import Link from React Router
import "../Styles/Home.css";

function Home() {
  const [text, setText] = useState("");
  const [showCard, setShowCard] = useState(false);

  useEffect(() => {
    const words = "Welcome to My Portfolio";
    let index = 0;

    const intervalId = setInterval(() => {
      setText(words.substring(0, index + 1));
      index++;

      if (index === words.length) {
        clearInterval(intervalId);
      }
    }, 100); // Adjust the interval as needed for your desired speed

    // Show the card after 3 seconds
    const timeoutId = setTimeout(() => {
      setShowCard(true);
    }, 3000);

    return () => {
      clearInterval(intervalId);
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <div className="home-container">
      {/* Hero Section */}
      <div className="hero-section">
        {/* Content on the Left */}
        <div className="content-left">
          <div className="hero-content">
            <h1>{text}</h1>
            <p>Explore my work and contact me for collaborations.</p>
            {/* Conditionally render the card */}
            {showCard && (
              <Card
                style={{
                  width: "10rem",
                  height: "30vh",
                  margin: "0 auto 2rem auto",
                  padding: "1rem",
                }}
              >
                <Link to="/cv" style={{ textDecoration: "none" }}>
                  <Card.Body
                    style={{
                      backgroundColor: "white", // Example color
                      color: "black",
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                      textAlign: "center",
                      borderRadius: "0.5rem",
                    }}
                  >
                    <Card.Title style={{ marginBottom: "2rem" }}>
                      My CV
                    </Card.Title>
                    {/* Additional content can be added here */}
                  </Card.Body>
                </Link>
              </Card>
            )}   
          </div>
        </div>
        {/* Background Image on the Right */}
        <div className="background-right">
          <img src={backgroundImage} alt="Background" />
        </div>
      </div>
    </div>
  );
}

export default Home;
