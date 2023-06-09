import React from "react";

export const Layout = ({ children }) => {
  return (
    <>
      {children}
      <footer class="bg-dark text-light p-5 text-center mt-5">
        Copyright &copy; All right Reserved. Made with 💓 by me 🤷‍♀️
      </footer>

      <a href="#navbar" id="goup">
        <i class="fa-solid fa-circle-up"></i>
      </a>
    </>
  );
};
