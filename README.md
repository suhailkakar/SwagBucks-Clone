### Built With
* [React JS](https://reactjs.org/)
* [Node JS](https://nodejs.org/en/)
* [Express JS](https://expressjs.com/)
* [MongoDB](https://www.mongodb.com/)
* [Bootstrap](https://react-bootstrap.github.io/)

### Deployed In
* [Netlify](https://netlify.com/)
* [Heroku](https://www.heroku.com/)

### Folder Structure


```bash
📦 SwagBucks-Clone
├── backend
│   ├── admin.js
│   ├── app
│   │   ├── config
│   │   │   ├── auth.config.js
│   │   │   └── db.config.js
│   │   ├── controllers
│   │   │   ├── auth.controller.js
│   │   │   ├── credit.controller.js
│   │   │   ├── note.controller.js
│   │   │   └── user.controller.js
│   │   ├── middlewares
│   │   │   ├── authJwt.js
│   │   │   ├── index.js
│   │   │   └── verifySignUp.js
│   │   ├── models
│   │   │   ├── credit.model.js
│   │   │   ├── index.js
│   │   │   ├── note.model.js
│   │   │   ├── role.model.js
│   │   │   └── user.model.js
│   │   └── routes
│   │       ├── auth.routes.js
│   │       ├── credit.routes.js
│   │       ├── note.routes.js
│   │       └── user.routes.js
│   ├── package.json
│   └── server.js
├── frontend
│   ├── package.json
│   ├── package-lock.json
│   ├── public
│   │   ├── favicon.ico
│   │   ├── index.html
│   │   ├── logo192.png
│   │   ├── logo512.png
│   │   ├── manifest.json
│   │   └── robots.txt
│   └── src
│       ├── App.css
│       ├── App.js
│       ├── components
│       │   ├── board-admin.component.js
│       │   ├── board-moderator.component.js
│       │   ├── board-user.component.js
│       │   ├── footer.js
│       │   ├── login.component.js
│       │   ├── login.js
│       │   ├── offers.js
│       │   ├── playvideo.js
│       │   ├── profile.component.js
│       │   ├── signup.js
│       │   └── watchvideo.js
│       ├── images
│       │   ├── aboutleft.png
│       │   ├── aboutright.png
│       │   ├── card.jpg
│       │   ├── female-mid3.jpg
│       │   ├── gift-cards-IN.min.svg
│       │   ├── header-background-giftcards.jpg
│       │   ├── login.jpg
│       │   ├── logo-abc.svg
│       │   ├── logo-buzzfeed.svg
│       │   ├── logo-huffington-post.svg
│       │   ├── logo-save-the-student.svg
│       │   ├── logo-the-penny-hoarder.svg
│       │   ├── prodege-logo.png
│       │   ├── sprite-template-default.min.svg
│       │   └── trust.png
│       ├── index.js
│       ├── logo.svg
│       ├── Offers
│       │   └── offers.json
│       ├── pages
│       │   ├── home.js
│       │   └── login.js
│       ├── services
│       │   ├── auth-header.js
│       │   ├── auth.service.js
│       │   └── user.service.js
│       ├── serviceWorker.js
│       └── setupTests.js
└── README.md
```




### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/suhailkakar/SwagBucks-Clone
   ```
2. Install NPM packages

* Install node modules in both frontend and backend folder
* Run `npm start` in frontend and `node server.js` in backend


### Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
3. Commit your Changes (`git commit -m 'Some Good Features'`)
4. Push to the Code (`git push -u origin master `)
5. Open a Pull Request
