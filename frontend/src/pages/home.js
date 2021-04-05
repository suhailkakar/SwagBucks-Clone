import React, {Component} from "react";
import Buzzfeed from "../images/logo-buzzfeed.svg";
import SaveTheStudents from "../images/logo-save-the-student.svg";
import ThePennyHoarder from "../images/logo-the-penny-hoarder.svg";
import ABCNews from "../images/logo-abc.svg";
import HuffingtonPost from "../images/logo-huffington-post.svg";
import GiftCard from "../images/gift-cards-IN.min.svg";
import AboutLeft from "../images/aboutleft.png";
import Female from "../images/female-mid3.jpg";
import Signup from "../components/signup";
import Footer from '../components/footer'


export default function App() {
    return (
    <>
      <div className="header-main">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 text-white text-center" data-aos="fade-up">
              <h2> Put cash back in your wallet!</h2>
              <div className="text-center py-4 playbutton">
                <img src="https://i.ibb.co/5xr8PPR/output-onlinepngtools-1.png" />
              </div>
              <div className="see-seconds">See how in 43 seconds </div>
            </div>
            <div className="col-lg-4 offset-lg-2" data-aos="fade-up">
            <br />
              <Signup />
              <br />

            </div>
          </div>
        </div>
      </div>
      <div className="bg-light py-4" style={{marginLeft: "-13%", width: 1375}}>
        <div className="container">
          <div
            className="d-flex flex-wrap justify-content-between align-items-center as-seen"
            data-aos="fade-up"
          >
            <span>As seen on</span> <img src={Buzzfeed} alt="Buzzfeed" />{" "}
            <img src={SaveTheStudents} alt="Save The Student" loading="lazy" />{" "}
            <img src={ThePennyHoarder} alt="The Penny Hoarder" loading="lazy" />{" "}
            <img src={ABCNews} alt="abc" loading="lazy" />{" "}
            <img
              src={HuffingtonPost}
              id="huffpost"
              alt="Huffington Post"
              loading="lazy"
            />{" "}
          </div>
        </div>
      </div>
      <div className="about py-5">
        <div className="container">
          <h2 className="text-center pb-3" data-aos="fade-up">
            Get <strong>Free</strong> Gift Cards &amp; Cash for the everyday
            things you do online. Here's how…
          </h2>
          <div className="row">
            <div className="col-lg-6 about-left" data-aos="fade-up">
              <div className="py-4">
                <img src={AboutLeft} className="img-fluid" />
              </div>
              <h3 className="py-3">Earn Points</h3>
              <p>
                {" "}
                Shop online, Watch entertaining videos, Search the web, Answer
                surveys and find great deals to earn your points.
              </p>
            </div>
            <div className="col-lg-6 about-right" data-aos="fade-up">
              <div className="py-4">
                <img src={GiftCard} className="img-fluid" />
              </div>
              <h3 className="py-3">
                Get Free Gift
                <br />
                Cards
              </h3>
              <p>
                {" "}
                Redeem your points for gift cards to your favorite retailers
                like Amazon and Walmart or get cash back from PayPal.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div style={{marginLeft: "-13%", width: 1375}} id="lpContentBrag" className="secation-bg">
        <div className="container" data-aos="fade-up">
          <h2 className="text-center pb-4">We’ve paid our members over</h2>
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
      </div>
      <div className="py-5">
        <div className="container testmoinl" style={{ maxWidth: 600 }}>
          <div className="row align-items-center" data-aos="fade-up">
            <div className="col-lg-3">
              <img src={Female} className="img-fluid" />
            </div>
            <div className="col-lg-9">
              <p>
                “My most rewarding moment with Swagbucks is using the gift cards
                I earn to buy gifts for my child's Christmas and February
                birthday.”{" "}
              </p>
              <span>Kim, Member since 2009 </span>{" "}
            </div>
          </div>
        </div>
      </div>
      <div style={{marginLeft: "-13%", width: 1375}} className="secation-bg ">
        <div className="container text-center" data-aos="fade-up">
          <div className="gift-cards-icon">
            {" "}
            <img style={{width: 100}} src="https://image.flaticon.com/icons/png/512/62/62780.png"/>{" "}
          </div>
          <p className="gift-cards-text">
            {" "}
            We give out <strong>7,000</strong> free gift cards{" "}
            <em>every day</em>{" "}
          </p>
        </div>
      </div>
      <div className="py-5 overflow-hidden">
        <div className="container text-center" data-aos="fade-up">
          <h3>Put cash back in your wallet!</h3>
          <a href="#" className="btn btn-primary">
            Sign Up Now
          </a>{" "}
        </div>
      </div>
      <div style={{marginLeft: "-13%", width: 1375}}>
  <Footer  />
  </div>
    </>
  );
}
