import React from "react";

function Brokerage() {
  return (
    <div className="container">
      <div className="row p-4 mt-5 text-center border-top">
        <div className="col-8 p-4">
          <a href="" style={{ textDecoration: "none" }}>
            <h3 className="fs-5">Brokerage calculator</h3>
          </a>

          <ul
            className="text-muted fs-6"
            style={{ textAlign: "left", lineHeight: "2.5" }}
          >
            <li>
              Calculate brokerage for intraday and delivery trades in equity
              markets.
            </li>
            <li>
              Estimate total charges including STT, GST, SEBI fees, and stamp
              duty.
            </li>
            <li>
              Compare charges across different exchanges like NSE and BSE.
            </li>
            <li>
              Input buy/sell price, quantity, and segment to get accurate
              results.
            </li>
            <li>
              Visual breakdown of all applicable charges for transparency.
            </li>
            <li>Helps traders optimize costs and maximize net returns.</li>
          </ul>
        </div>
        <div className="col-4 p-4">
          <a href="" style={{ textDecoration: "none" }}>
            <h3 className="fs-5">List of charges</h3>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Brokerage;
