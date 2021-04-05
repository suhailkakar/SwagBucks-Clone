import React from "react";

export default function playvideo() {
  const credit = localStorage.getItem('credit')
  setTimeout(function () {
    window.close();
  }, 30000);

  const url = localStorage.getItem("url");
  return (
    <div style={{ marginTop: "-1.4%", marginLeft: "-11%" }}>
      <iframe
        style={{ border: "none" }}
        src={url}
        name="myiFrame"
        scrolling="no"
        frameborder="1"
        marginheight="0px"
        marginwidth="0px"
        height="10000px"
        width="110%"
        allowfullscreen
      ></iframe>
    </div>
  );
}
