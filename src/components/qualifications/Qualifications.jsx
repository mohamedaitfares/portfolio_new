import React, { useState } from "react";
import "./qualifications.css";

const Qualifications = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <section className="qualifications section">
      <h2 className="section__title">Qualifications</h2>
      <span className="section__subtitle">My personal journey</span>

      <div className="qualifications__container container">
        <div className="qualifications__tabs">
          <div
            className={
              toggleState === 1
                ? "qualifications__button qualifications__active button--flex"
                : "qualifications__button button--flex"
            }
            onClick={() => toggleTab(1)}
          >
            <i className="uil uil-graduation-cap qualifications__icon"></i>{" "}
            Education
          </div>

          <div
            className={
              toggleState === 2
                ? "qualifications__button qualifications__active button--flex"
                : "qualifications__button button--flex"
            }
            onClick={() => toggleTab(2)}
          >
            <i className="uil uil-briefcase-alt qualifications__icon"></i>{" "}
            Experience
          </div>
        </div>

        <div className="qualifications__sections">
          <div
            className={
              toggleState === 1
                ? "qualifications__content qualifications__content-active"
                : "qualifications__content"
            }
          >
            <div className="qualifications__data">
              <div>
                <h3 className="qualifications__title">Web Designe11</h3>
                <span className="qualifications__subtitle">
                  Spain - Institute
                </span>
                <div className="qualifications__calender">
                  <i className="uil uil-calendar-alt"></i> 2021 - Present
                </div>
              </div>

              <div>
                <span className="qualifications__rounder"></span>
                <span className="qualifications__line"></span>
              </div>
            </div>

            <div className="qualifications__data">
              <div></div>
              <div>
                <span className="qualifications__rounder"></span>
                <span className="qualifications__line"></span>
              </div>
              <div>
                <h3 className="qualifications__title">Web Designe111</h3>
                <span className="qualifications__subtitle">
                  Spain - Institute
                </span>
                <div className="qualifications__calender">
                  <i className="uil uil-calendar-alt"></i> 2021 - Present
                </div>
              </div>
            </div>

            <div className="qualifications__data">
              <div>
                <h3 className="qualifications__title">Web Designe1111</h3>
                <span className="qualifications__subtitle">
                  Spain - Institute
                </span>
                <div className="qualifications__calender">
                  <i className="uil uil-calendar-alt"></i> 2021 - Present
                </div>
              </div>

              <div>
                <span className="qualifications__rounder"></span>
                <span className="qualifications__line"></span>
              </div>
            </div>

            <div className="qualifications__data">
              <div></div>
              <div>
                <span className="qualifications__rounder"></span>
                <span className="qualifications__line"></span>
              </div>
              <div>
                <h3 className="qualifications__title">Web Designe1111</h3>
                <span className="qualifications__subtitle">
                  Spain - Institute
                </span>
                <div className="qualifications__calender">
                  <i className="uil uil-calendar-alt"></i> 2021 - Present
                </div>
              </div>
            </div>
          </div>

          <div
            className={
              toggleState === 2
                ? "qualifications__content qualifications__content-active"
                : "qualifications__content"
            }
          >
            <div className="qualifications__data">
              <div>
                <h3 className="qualifications__title">Web Designe11</h3>
                <span className="qualifications__subtitle">
                  Spain - Institute
                </span>
                <div className="qualifications__calender">
                  <i className="uil uil-calendar-alt"></i> 2021 - Present
                </div>
              </div>

              <div>
                <span className="qualifications__rounder"></span>
                <span className="qualifications__line"></span>
              </div>
            </div>

            <div className="qualifications__data">
              <div></div>
              <div>
                <span className="qualifications__rounder"></span>
                <span className="qualifications__line"></span>
              </div>
              <div>
                <h3 className="qualifications__title">Web Designe111</h3>
                <span className="qualifications__subtitle">
                  Spain - Institute
                </span>
                <div className="qualifications__calender">
                  <i className="uil uil-calendar-alt"></i> 2021 - Present
                </div>
              </div>
            </div>

            <div className="qualifications__data">
              <div>
                <h3 className="qualifications__title">Web Designe1111</h3>
                <span className="qualifications__subtitle">
                  Spain - Institute
                </span>
                <div className="qualifications__calender">
                  <i className="uil uil-calendar-alt"></i> 2021 - Present
                </div>
              </div>

              <div>
                <span className="qualifications__rounder"></span>
                <span className="qualifications__line"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualifications;
