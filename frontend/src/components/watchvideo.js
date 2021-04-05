import React, { Component } from "react";
import axios from "axios";
import SweetAlert from "react-bootstrap-sweetalert";

export default class offers extends Component {
  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     alert: null
  //   };
  // }

  state = {
    users: [],
    credit: '',

  };
  componentDidMount() {
    axios.get("http://localhost:8080/offers").then((e) => {
      this.setState({ users: e.data });
      console.log(e.data);
    });
    this.book()
  }
  book = () => {
    const credit_id = localStorage.getItem("credit_id")
  axios.get("http://localhost:8080/credit/"+credit_id)
    .then(response => {
      console.log(response.data.credit)
      this.setState({
        credit: response.data.credit
      });
     console.log(this.state.credit)
    });

}

  deleteThisGoal() {
    const getAlert = () => (
      <SweetAlert
        success
        title="Great!"
        onConfirm={() => this.hideAlert()}
        timeout={30000}
      >
        A Video will be played in new tab, After completing it, you will earn
        its credit
      </SweetAlert>
    );

    this.setState({
      alert: getAlert(),
    });
    window.open("playvideo", "_blank");
  }
  hideAlert() {
    this.setState({
      alert: null,
    });
  }
 

  render() {
    return (
      <div>
        <div className="py-4">
          <div className="row">
            {this.state.alert}

            {this.state.users.map((data, id) => (
              <div className="col-lg-4 mb-3">
                <div style={{ border: "1px solid #D8D8D8", width: 300 }}>
                  <img
                    src={data.image}
                    className="card-img-top img-fluid"
                    alt="..."
                  />
                  <div className="card-body">
                    <h5 className="card-title">{data.title}</h5>
                    <p className="card-text">{data.description}</p>
                  </div>
                  <div className="card-body border-top d-flex justify-content-between align-items-center py-1">
                    <span>
                      <a href="#" className="text-dark"></a>
                    </span>
                    <br />
                    <br />
                    <a onClick={() => this.deleteThisGoal() || localStorage.setItem('url', data.website)} href="#" className="btn btn-primary py-1">
                    {data.credit} SB
                  </a>

                    <a
                      onClick={() => {
                        const credit_id = localStorage.getItem("credit_id");
                        axios
                          .put("http://localhost:8080/credit/" + credit_id, {
                            credit: this.state.credit + data.credit,
                          })
                          .then((response) => {
                            console.log(response.data);
                          });
                      }
                    }
                    >
                      asdas
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}
