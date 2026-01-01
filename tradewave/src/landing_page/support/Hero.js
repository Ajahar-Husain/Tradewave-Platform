import React from "react";

function Hero() {
  return (
    <section className="container-fluid" id="supportHero">
      <div className="p-5 " id="supportWrapper">
        <h3>Support Portal</h3>
        <a href="">Track Tickets</a>
      </div>
      <div className=" row p-5 m-5 " >
        <div className="col-6 p-5 ">
          <h1 className="fs-3">Search for answer or browser help topics to create a ticket</h1>
          <input placeholder="Eg. how do I acivate F&O" /><br/>
          <a href="#">Track account opening</a> 
          <a href="#">Track segment acivition</a>
          <a href="#">Intraday margins</a>
          <a href="#">kite user manual</a>
        </div>
        <div className="col-6 p-5">
          <h1 className="fs-3">Featured</h1>
           <ol>
            <li><a href="#">Current Takeovers and Delisting - January 2024</a></li>
            <li><a href="#">Latest Intraday leverages - MIS & col</a></li>
           </ol>
           
          
        </div>
       
      </div>
    </section>
  );
}

export default Hero;
