import PropTypes from "prop-types"
const userdata = [
  {
    name: "Raj Hussain",
    city: "Chennai",
    description: "Frontend Developer",
    skills: ["HTML", "CSS", "JavaScript", "React"],
    online: true,
    profile: "hussain.jpg"

  },
  {
    name: "azad hussain",
    city: "Chennai",
    description: "backend developer",
    skills: [ "JavaScript (Node.js)","MangoDb","Express js"],
    online: false,
    profile: "azad.png"
  },
  {
    name: "james",
    city: "Bangalore",
    description: "Full Stack Developer",
    skills: ["HTML", "CSS", "JavaScript", "React", "Node.js", "MongoDB"],
    online: true,
    profile: "james.jpeg"
},


];

function User(props) {
  return (
    <div className="Card-container">
      <span className={props.online ? "pro online" : "pro offline"}>
        {props.online ? "ONLINE" : "OFFLINE"}
      </span>
      <img src={props.profile} className="img" alt="no image" />

      <h3>{props.name}</h3>
      <h3>{props.city}</h3>
      <p>{props.description}</p>
      <div className="button">
        <button type="button" className="primary">
          Message
        </button>
        <button className="primary outline">Following</button>
      </div>
      <div className="skills">
        <h6>Skills</h6>
        <ul>
          {props.skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export const Usercard = () => {
  return (
    <>
      {userdata.map((user, index) => (
        <User
          key={index}
          name={user.name}
          city={user.city}
          description={user.description}
          skills={user.skills}
          online={user.online}
          profile={user.profile}
        />
      ))}
    </>
  );
};
User.PropTypes = {
  name: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  skills: PropTypes.string.isRequired,
  online: PropTypes.bool.isRequired
};