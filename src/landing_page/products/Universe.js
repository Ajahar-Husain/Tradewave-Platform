import React from "react";

function Universe() {
  const logoStyle = {
    width: "200px",
    height: "200px",
    objectFit: "contain",
    marginBottom: "10px",
  };

  const buttonStyle = {
    width: "200px",
    marginTop: "20px",
  };

  return (
    <div className="container">
      <div className="row text-center">
        <h1 className="mt-4">The Zerodha Universe</h1>
        <p className="mb-4">
          Extend your trading and investment experience even further with our
          partner platforms
        </p>

        <div className="col-12 col-md-4 p-3 mt-3">
          <img src="media/images/smallcaseLogo.png" alt="Smallcase" style={logoStyle} />
          <p className="text-small text-muted">
            Thematic investing platform that helps you invest in diversified baskets of stocks on ETFs.
          </p>
        </div>

        <div className="col-12 col-md-4 p-3 mt-3">
          <img src="media/images/zerodhaFundhouse.png" alt="Zerodha Fundhouse" style={logoStyle} />
          <p className="text-small text-muted">
            Our asset management venture that is creating simple and transparent index funds to help you save for your goals.
          </p>
        </div>

        <div className="col-12 col-md-4 p-3 mt-3">
          <img src="media/images/streakLogo.png" alt="Streak" style={logoStyle} />
          <p className="text-small text-muted">
            Systematic trading platform that allows you to create and backtest strategies without coding.
          </p>
        </div>

        <div className="col-12 col-md-4 p-3 mt-3">
          <img src="media/images/dittoLogo.png" alt="Ditto" style={logoStyle} />
          <p className="text-small text-muted">
            Personalized advice on life and health insurance. No spam and no mis-selling.
          </p>
        </div>

        <div className="col-12 col-md-4 p-3 mt-3">
          <img src="media/images/goldenpiLogo.png" alt="GoldenPi" style={logoStyle} />
          <p className="text-small text-muted">
            Investment research platform that offers detailed insights on stocks, sectors, supply chains, and more.
          </p>
        </div>

        <div className="col-12 col-md-4 p-3 mt-3">
          <img src="media/images/sensibullLogo.svg" alt="Sensibull" style={logoStyle} />
          <p className="text-small text-muted">
            Options trading platform that lets you create strategies, analyze positions, and examine data points like open interest, FII/DII, and more.
          </p>
        </div>

        <div className="w-100 d-flex justify-content-center">
          <button className="btn btn-primary fs-5 mb-5" style={buttonStyle}>
            Signup for free
          </button>
        </div>
      </div>
    </div>
  );
}

export default Universe;