import { React, useState } from "react";
import "../../styles/fonts.css";
import "../../App.css";
import styles from "./Home.module.css";
import InputField from "./InputField/inputField";
import Result from "./Result/result";
import Navbar from "./Navbar/Navbar";
import About from "./About/About";

const Home = () => {
  const [resultData, setResultData] = useState(null);

  return (
    <div>
      <Navbar />

      <div className={styles["home-main"]}>
        <div className={styles["home-heading-description-div"]}>
          <div className={styles["home-heading"]}>
            Cheat<span style={{ color: "pink" }}>GPT</span>!
          </div>

          <div className={styles["home-description"]}>
            The ultimate AI detection bypass tool. We remove AI detection from
            content generated by ChatGPT and other AI language models.
          </div>
        </div>
        <InputField setResultData={setResultData} />
        {resultData && <Result data={resultData} />}
      </div>
    </div>
  );
};

export default Home;
