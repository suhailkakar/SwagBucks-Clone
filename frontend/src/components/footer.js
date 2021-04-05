import React from 'react'
import prodelge from "../images/prodege-logo.png";
import trust from "../images/trust.png";
export default function footer() {
    return (
        <div>
               <footer  className="secation-bg pb-0 mt-3">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <h4>Swagbucks</h4>
              <a href="#">Useful Articles</a> <a href="#">About Us</a>{" "}
              <a href="#">How it Works</a> <a href="#">In the Press</a>{" "}
            </div>
            <div className="col-lg-4">
              <h4>Rewards</h4>
              <a href="#">All Gift Cards</a> <a href="#">Discover Deals</a>{" "}
            </div>
            <div className="col-lg-4">
              {" "}
              <img src={trust} className="img-fluid" />
              <div className="text">
                <small>
                  Me gusta esta página, me permite ganar algo de dinero e
                  influir en los productos que hay en el mercado.
                </small>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white">
          <div className="container py-3">
            <div className="text-center py-2">
              <img src={prodelge} style={{ maxWidth: 150, margin: "auto" }} />
              <br />
              <p className="pt-1">
                <small>Copyright © 2021 Prodege, LLC </small>
              </p>
              <small>
                Swagbucks®-related trademarks including “Swagbucks®”, “Swag
                Codes®”, “Swagstakes®”, “SwagButton”, “SwagUp”, “SB” and the
                Swagbucks logo are the property of Prodege, LLC; all rights
                reserved. Other trademarks appearing on this site are property
                of their respective owners, which do not endorse and are not
                affiliated with Swagbucks or its promotions.{" "}
              </small>{" "}
            </div>
          </div>
        </div>
      </footer> 
        </div>
    )
}
