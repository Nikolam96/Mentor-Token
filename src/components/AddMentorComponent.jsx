import styles from "./startupMentors/startupMentors.module.css";

const AddMentorComponent = () => {
  return (
    <div className={styles.addMentorComponent}>
      <div>
        <h2>My Mentors</h2>
        <p>Monitor and add new mentors</p>
        <button className={styles.button}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
          >
            <path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z" />
          </svg>
          <span>Add New Mentor</span>
        </button>
      </div>
      <div>
        <img
          src="../../public/Group 1000002313.png"
          alt="Image with computer"
        />
      </div>
    </div>
  );
};
export default AddMentorComponent;
