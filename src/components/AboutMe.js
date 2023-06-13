import React from "react";
import sushil from "../assets/sushil.JPG";
import { Layout } from "./Layout";

export const AboutMe = () => {
  return (
    <Layout>
      <section id="about" className="container mt-5 pt-5">
        <div className="title">
          <span>About Me</span>
        </div>
        <div className="row">
          <div className="col-md-4 mb-3">
            <img src={sushil} alt="some img" width="100%" />
          </div>
          <div className="col-md-8">
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. At ipsam
              ad fuga, cumque qui fugit inventore vel deleniti minus tempore
              officiis eius blanditiis iusto perferendis officia odit atque
              asperiores soluta.
            </p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. At ipsam
              ad fuga, cumque qui fugit inventore vel deleniti minus tempore
              officiis eius blanditiis iusto perferendis officia odit atque
              asperiores soluta.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};
