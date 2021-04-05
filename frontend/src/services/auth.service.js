import axios from "axios";

const API_URL = "http://localhost:8080/api/auth/";

class AuthService {
  login(username, password) {
    return axios
      .post(API_URL + "signin", {
        username,
        password
      })
      .then(response => {
        if (response.data.accessToken) {
          localStorage.setItem("user", JSON.stringify(response.data));
          localStorage.setItem("username", response.data.username);
        }
        return response.data;
      });
      
      
  }
  logout() {
    localStorage.removeItem("user");
  }


  register(username, email, password) {
    axios.post("http://localhost:8080/credit/", {
      username, 
      'credit' : '0'
    }).then(response => {
      localStorage.setItem('credit_id',response.data._id)
    })
    return axios.post(API_URL + "signup", {
      username,
      email,
      password
    });

  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem('user'));;
  }
}

export default new AuthService();
