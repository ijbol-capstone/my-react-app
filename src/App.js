function App() {
  const styles = {
    container: {
      fontFamily: "Arial, sans-serif",
      maxWidth: "800px",
      margin: "40px auto",
      padding: "20px",
      backgroundColor: "#f5f5f5",
    },
    header: {
      backgroundColor: "#300426",
      color: "white",
      padding: "25px",
      textAlign: "center",
      borderRadius: "10px",
    },
    section: {
      backgroundColor: "white",
      padding: "20px",
      marginTop: "20px",
      borderRadius: "10px",
      boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
    },
    card: {
      border: "1px solid #ddd",
      padding: "10px",
      marginTop: "10px",
      borderRadius: "5px",
    },
 
    profile: {
            width: "230px",
            height: "260px",
           
     },  
    footer: {
      textAlign: "center",
      marginTop: "20px",
      color: "gray",
    },
   
  };
 
  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <img style={styles.profile} className="profile" src="/Image.jpg" alt="Profile"></img>
        <h2>Lianne Magno</h2>
        <p>BSIT student at National University MOA</p>
      </div>
 
      <div style={styles.section}>
        <h2>About Me</h2>
        <p>
          Welcome to my profile page!
            I enjoy baking cakes and watching Netflix series during my free time.
            I’m also interested in technology and design, and as a student,
            I’m eager to keep learning and improving my skills little by little every day.
 
        </p>
      </div>
 
      <div style={styles.section}>
        <h2>Skills</h2>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>React JS</li>
        </ul>
      </div>
 
      <div style={styles.section}>
        <h2>Projects</h2>
 
        <div style={styles.card}>
          <h3>HabitUp</h3>
          <p>A simple habit tracking web application.</p>
        </div>
 
        <div style={styles.card}>
          <h3>TipidKo</h3>
          <p>An expense tracking system for tracking daily expenses.</p>
        </div>
      </div>
 
      <div style={styles.section}>
        <h2>Contact</h2>
        <p>Email: liannemagno1@gmail.com</p>
        <p>Location: Cavite, Philippines</p>
      </div>
 
      <div style={styles.footer}>
        <p>© 2026 Lianne Magno</p>
      </div>
    </div>
  );
}
 
export default App;