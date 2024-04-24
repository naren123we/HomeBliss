import React from "react";
import "./Companies.css";
const Companies = () => {
  return (
    <section className="c-wrapper">
      <div className="paddings innerWidth flexCenter c-container">
        {/* <img src="./prologis.png" alt="" /> */}
        <img
          width={160}
          src="https://tse4.mm.bing.net/th?id=OIP.oc-KyOle0ZdIA5FD918W6AHaE7&pid=Api&P=0&h=220"
          alt=""
        />
        <img
          width={160}
          src="https://images.all-free-download.com/images/graphiclarge/real_estate_logo_6844538.jpg"
          alt=""
        />
        <img
          width={200}
          src="https://cdn.logojoy.com/wp-content/uploads/2018/05/30150858/1914.png"
          alt=""
        />
        <img
          width={160}
          src="https://graphicsfamily.com/wp-content/uploads/edd/2020/04/Real-Estate-Building-Logo-Template-1024x1024.png"
          alt=""
        />
      </div>
    </section>
  );
};

export default Companies;
