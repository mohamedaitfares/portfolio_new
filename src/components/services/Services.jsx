import React, { useState } from "react";
import "./services.css";

const Services = () => {
  const githubRepoUrl = "https://github.com/your-username/your-repo-name";

  const [toggleState, setToggleState] = useState(0);

  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <section className="services section" id="services">
      <h2 className="section__title">Projects</h2>
      <span className="section__subtitle">Some of what i did</span>

      <div className="services__container container grid">
        <div className="services__content">
          <div>
            <i className="uil uil services__icon bx bx-border-radius"></i>
            <h3 className="services__title">
              Form <br />
              Generator
            </h3>
          </div>

          <span className="services__button" onClick={() => toggleTab(1)}>
            View More
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>

          <div
            className={
              toggleState === 1
                ? "services__modal active-modal"
                : "services__modal"
            }
          >
            <div className="services__modal-content">
              <i
                onClick={() => toggleTab(0)}
                className="uil uil-times services__modal-close"
              ></i>

              <h3 className="services__modal-title">Form Generator</h3>
              <p className="services__modal-description grid">
                Web application for generating online forms: online survey with
                an integrated sentiment analysis tool for management and
                processing of feedback.
              </p>
              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-info"></i>
                  <p className="services__modal-info">
                    Led the end-to-end development of a React.js and Spring
                    Boot-based web application.
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-info"></i>
                  <p className="services__modal-info">
                    Implemented features for creating and customizing online
                    forms, integrating real-time feedback processing.
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-info"></i>
                  <p className="services__modal-info">
                    Utilized Python for sentiment analysis, ensuring actionable
                    insights from collected data.
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-info"></i>
                  <p className="services__modal-info">
                    Applied UML for system design.
                  </p>
                </li>

                <li className="services__modal-service">
                  <a
                    href={githubRepoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <p className="services__modal-info">
                      Project's GitHub repository
                    </p>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="services__content">
          <div>
            <i className="uil uil services__icon bx bx-expand-horizontal"></i>
            <h3 className="services__title">
              Speed <br />
              Radar
            </h3>
          </div>

          <span className="services__button" onClick={() => toggleTab(2)}>
            View More
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>

          <div
            className={
              toggleState === 2
                ? "services__modal active-modal"
                : "services__modal"
            }
          >
            <div className="services__modal-content">
              <i
                onClick={() => toggleTab(0)}
                className="uil uil-times services__modal-close"
              ></i>

              <h3 className="services__modal-title">Speed radar</h3>
              <p className="services__modal-description grid">
                A speed radar using an embedded system and various IoT solutions
                to manage road traffic
              </p>
              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-info"></i>
                  <p className="services__modal-info">
                    Designed and implemented a speed radar system using Arduino,
                    Python, and MySQL.
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-info"></i>
                  <p className="services__modal-info">
                    {" "}
                    Integrated IoT solutions for real-time data collection and
                    processing.
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-info"></i>
                  <p className="services__modal-info">
                    Developed algorithms to calculate and display accurate speed
                    information, contributing to road traffic management.
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-info"></i>
                  <p className="services__modal-info">
                    Leveraged Docker for containerization.
                  </p>
                </li>

                <li className="services__modal-service">
                  <a
                    href={githubRepoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <p className="services__modal-info">
                      Project's GitHub repository
                    </p>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="services__content">
          <div>
            <i className="uil uil services__icon bx bx-edit"></i>
            <h3 className="services__title">
              Data <br />
              Management
            </h3>
          </div>

          <span className="services__button" onClick={() => toggleTab(3)}>
            View More
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>

          <div
            className={
              toggleState === 3
                ? "services__modal active-modal"
                : "services__modal"
            }
          >
            <div className="services__modal-content">
              <i
                onClick={() => toggleTab(0)}
                className="uil uil-times services__modal-close"
              ></i>

              <h3 className="services__modal-title">Data Management</h3>
              <p className="services__modal-description grid">
                Android application for the management of images and data:
                Management, automation, and processing of images and data, with
                the integration of Microsoft development tools.
              </p>
              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-info"></i>
                  <p className="services__modal-info">
                    Spearheaded the development of an Android application using
                    Android Studio, Java, and integrated Microsoft development
                    tools.
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-info"></i>
                  <p className="services__modal-info">
                    Engineered a scalable architecture for managing and
                    automating image processing tasks.
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-info"></i>
                  <p className="services__modal-info">
                    Implemented secure data transmission between the mobile
                    application and the designated SharePoint site.
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-info"></i>
                  <p className="services__modal-info">
                    Utilized Selenium for automated testing.
                  </p>
                </li>

                <li className="services__modal-service">
                  <a
                    href={githubRepoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <p className="services__modal-info">
                      Project's GitHub repository
                    </p>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
