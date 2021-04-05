import React from "react";
import Footer from "../components/footer";
import Login from '../components/login'

export default function login() {
  return (
    <div className="login-bg">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-8 text-white text-center" data-aos="fade-up">
            <h2>We’ve given back</h2>

            <div id="flipCounterWrapper">
              {" "}
              ₹
              <div id="flipCounter">
                {" "}
                <span className="flipCounterFrame">
                  <span className="flipCounterDigit">5</span>
                </span>
                <span className="flipCounterFrame">
                  <span className="flipCounterDigit">3</span>
                </span>
                <span className="flipCounterFrame">
                  <span className="flipCounterDigit">0</span>
                </span>
                ,
                <span className="flipCounterFrame">
                  <span className="flipCounterDigit">2</span>
                </span>
                <span className="flipCounterFrame">
                  <span className="flipCounterDigit">7</span>
                </span>
                <span className="flipCounterFrame">
                  <span className="flipCounterDigit">5</span>
                </span>
                ,
                <span className="flipCounterFrame">
                  <span className="flipCounterDigit">7</span>
                </span>
                <span className="flipCounterFrame">
                  <span className="flipCounterDigit">6</span>
                </span>
                <span className="flipCounterFrame">
                  <span className="flipCounterDigit">1</span>
                </span>
              </div>
            </div>
          </div>
          <div className="col-lg-4 " data-aos="fade-up">
              <Login />
  </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
