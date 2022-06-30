export const Business = (props) => {
  return (
    <div id="business">
      <div className="container business-global-content">
        <div className="row flex-content">
          <div className="col-xs-12 col-md-6">
            <div className="operation-text-section">
              <div className="operation-text-title-section">
                <h4>{props.data ? props.data.title : "loading..."}</h4>
                <img src={props.data ? props.data.icon : "loading..."} className="img-responsive" alt="" />{" "}
              </div>
              <p className="operation-text-context-content">{props.data ? props.data.paragraph : "loading..."}</p>
            </div>
          </div>
          <div className="col-xs-12 col-md-6">
            {" "}
            <img src={props.data ? props.data.bg : "loading..."} className="img-responsive" alt="" />{" "}
          </div>
        </div>
        <div className="business-step-container">
          <div className="business-step-content">
            <p className="step-bage">1</p>
            <div className="step-content-title">
              Cross-cryptocurrency address technology
            </div>
            <div className="step-content-text">
              The same address is used for the same series of cryptocurrencies, which effectively reduces the user's asset loss caused by incorrect deposits. For example, BTC and BCH have the same address, ETH and ERC-20 tokens have the same address.
            </div>
          </div>
          <div className="business-step-content">
            <p className="step-bage">2</p>
            <div className="step-content-title">
              Hot and cold wallet storage solution
            </div>
            <div className="step-content-text">
              Most assets are stored in cold wallets, while a small amout of digital currencies are kept in hot wallets.
              This ensures the safety of the user's assets while allowing for fast withdrawals.
            </div>
          </div>
          <div className="business-step-content">
            <p className="step-bage">3</p>
            <div className="step-content-title">
              Multi-signature security protection technology
            </div>
            <div className="step-content-text">
              Multi-signature verification when withdrawing assets & regular backup of user wallets. All assets can be easily restored even if the server is damaged.
            </div>
          </div>
          <div className="business-step-content">
            <p className="step-bage">4</p>
            <div className="step-content-title">
              Real-time asset sending and receiving technology
            </div>
            <div className="step-content-text">
              Support fast deposits and withdrawals. Use dynamic trading fees when the blockchain network is congested to ensure that assets arrive in the account on time.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
