export const Contact = (props) => {
  return (
    <div id="contact" className=''>
      <div className="container">
        <div className="contact-content-box">
          <p className="contact-content-box-title">
            {props.data ? props.data.title : 'Loading'}
          </p>
          <h2>
            {props.data ? props.data.title1 : 'Loading'}
          </h2>
          <p className="contact-content-box-context">
            {props.data ? props.data.paragraph : 'Loading'}
          </p>
          <h3>
            Contact us
          </h3>
          <div className="contact-address-box">
            <p>Email us: </p>
            <p>Business: </p>
          </div>
          <div className="contact-icon-box">
            <img src="img/sociallogo/1.png" alt="social-icon" />
            <img src="img/sociallogo/2.png" alt="social-icon" />
            <img src="img/sociallogo/3.png" alt="social-icon" />
            <img src="img/sociallogo/4.png" alt="social-icon" />
            <img src="img/sociallogo/5.png" alt="social-icon" />
          </div>
        </div>
      </div>
    </div>
  )
}
