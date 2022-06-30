export const Operations = (props) => {
  return (
    <div id="operations">
      <div className="container operation-global-content">
        <div className="row flex-content">
          <div className="col-xs-12 col-md-6">
            {" "}
            <img src={props.data ? props.data.bg : "loading..."} className="img-responsive" alt="" />{" "}
          </div>
          <div className="col-xs-12 col-md-6">
            <div className="operation-text-section">
              <div className="operation-text-title-section">
                <h4>{props.data ? props.data.title : "loading..."}</h4>
                <img src={props.data ? props.data.icon : "loading..."} className="img-responsive" alt="" />{" "}
              </div>
              <p className="operation-text-context-content">{props.data ? props.data.paragraph : "loading..."}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="operation-brand">
          <p className="brand-title">
            {props.data ? props.data.brandTitle : "loading..."}
          </p>
          <div className="brand-top-container">
            <div className="brand-container-content col-6">
              <img src="img/mainbg/member@2x.png" alt="brand-img" className="col-5" />
              <div className="brand-text-box col-7">
                <p>ACCOUNTS CREATED</p>
                <h2>5+ MLN</h2>
              </div>
            </div>
            <div className="brand-container-content col-6">
              <img src="img/mainbg/transactionamount@2x.png" alt="brand-img" className="col-5" />
              <div className="brand-text-box col-7" >
                <p>TRADED</p>
                <h2>530+ B</h2>
              </div>
            </div>
          </div>
          <div className="brand-container text-center">
            <h3 className="brand-container-title">
              Enjoy our award-winning online trading platform
            </h3>
            <p className="brand-continer-text">
              Major global markets at your fingertips. Trade wherever you are, whrever you are, whenever you want to.
              It has never been more accessible.
            </p>
            <div className="brand-logo-box">
              <img src="img/mainbg/appstore.png" alt="app-icon" />
              <img src="img/mainbg/googlestore.png" alt="app-icon" />
              <img src="img/mainbg/webplat.png" alt="app-icon" />
            </div>
          </div>
          <div className="brand-text-content">
            <p>
              Named "Most Innovative Technology 2021" by TradingView, SCG is an award-winning global investment trading platform authorized and regulated by the UK Financial Conduct Authority, Cyprus Securities and Exchange Commission, and the Australian Securities and Investments Commission. Known for its premium 24/7 customer support, seamless trading experience, and competitive fees, SCG is a fast-rising leader in the European leveraged trading industry.
            </p>
            <p>
              SCG prides itself on being a transparent and fair broker, a 0% commission platform offering low overnight fees and tight spreads. With access to over 6,100 markets, our clients can invest directly in global stocks and ETFs, or trade CFDs with leverage on the world's most popular indices, commodities, stocks, and currency pairs. In permitted markets, we also provide our clients with access to popular cryptocurrencies. From Apple and Facebook to FTSE 100 and EUR/USD and more, you can trade on the web and on your smartphone from a simple and intuitive platform designed to help you trade smarter.
            </p>
            <p>
              In the first quarter of 2022 alone, SCG saw a 27% increase in new customers. It also reported a pickup in global deal activity, with total client deals across all markets up more than 36% compared to the previous quarter. These results reflect the group's growing reputation as the platform of choice for global retail traders. With over 5 million people who have established user accounts with us, SCG is one of the fastest-growing investment trading platforms.
            </p>
          </div>
          <div className="operations-logo-container">
            <img src="img/operationlogo/1.png" alt="review-img" />
            <p className="cut-line"></p>
            <img src="img/operationlogo/2.png" alt="review-img" />
            <p className="cut-line"></p>
            <img src="img/operationlogo/3.png" alt="review-img" />
            <p className="cut-line"></p>
            <img src="img/operationlogo/4.png" alt="review-img" />
            <p className="cut-line"></p>
            <img src="img/operationlogo/5.png" alt="review-img" />
          </div>
        </div>
      </div>
    </div>
  );
};
