import React from "react";

export const Social = () => {
  return (
    <div className="home__social">
      <a
        href="https://www.instagram.com"
        className="home__social-icon"
        target="_blank"
        rel="noreferrer"
      >
        <i class="uil uil-instagram"></i>
      </a>

      <a
        href="https://linkedin.com/in/mohamed-ait-fares-87b15a241"
        className="home__social-icon"
        target="_blank"
        rel="noreferrer"
      >
        <i class="uil uil-linkedin-alt"></i>
      </a>

      <a
        href="https://github.com/mohamedaitfares"
        className="home__social-icon"
        target="_blank"
        rel="noreferrer"
      >
        <i class="uil uil-github-alt"></i>
      </a>
    </div>
  );
};

export default Social;
