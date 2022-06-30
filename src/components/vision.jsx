export const Vision = (props) => {
  return (
    <div className="vision-main-container">
      <div id="vision" className='text-center vision-company-bg'>
        <div className='container'>
          <div className="vision-container">
            <div className="vision-container-left">
              <h3 className="vision-container-title">
                {props.data ? props.data.title : 'Loading'}
                <img src={props.data ? props.data.icon : 'Loading'} alt="vision-icon" />
              </h3>
            </div>
            <div className="vision-container-context">
              <h4>
                {props.data ? props.data.title1 : 'Loading'}
              </h4>
              <p>
                {props.data ? props.data.paragraph : 'Loading'}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container operation-global-content vision-global-content">
        <div className="row flex-content">
          <div className="col-xs-12 col-md-6">
            {" "}
            <img src={props.data ? props.data.bg : "loading..."} className="img-responsive" alt="" />{" "}
          </div>
          <div className="col-xs-12 col-md-6">
            <div className="operation-text-section">
              <div className="operation-text-title-section">
                <h4>{props.data ? props.data.title2 : "loading..."}</h4>
                <img src={props.data ? props.data.icon1 : "loading..."} className="img-responsive" alt="" />{" "}
              </div>
              <p className="operation-text-context-content">{props.data ? props.data.paragraph1 : "loading..."}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="vision-card-title">
          <p>activity participation</p>
          <span></span>
        </div>
        <div className="vision-flex-content">
          <div className="vision-card-box">
            <img src="img/mainbg/activitydiagram1@2x.png" alt="vision-img" />
            <p>SGC was invited to the Malta Blockchain Summit on November 7-9, 2019.
              Hundreds of companies participated in this event, with more than 4,000 participants.
            </p>
          </div>
          <div className="vision-card-box">
            <img src="img/mainbg/activitydiagram2@2x.png" alt="vision-img" />
            <p>The loondon Blockchain Week came to a successful conclusion recently.
              During the period, SGC participated in a total of 4 meetings and spent a meaningful time with other like-minded colleagues.</p>
          </div>
          <div className="vision-card-box">
            <img src="img/mainbg/activitydiagram3@2x.png" alt="vision-img" />
            <p>SGC participates in Asia Blockchain 2019 Summit in Taipei City.</p>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="vision-card-title">
          <p>activity participation</p>
          <span></span>
        </div>
        <div className="vision-galary-box">
          <div className="vision-town-card text-center">
            <img src="img/bg2/London,UK@2x.png" alt="town-img" />
            <p>London, UK</p>
          </div>
          <div className="vision-town-card text-center">
            <img src="img/bg2/Vilnius,Lithuania@2x.png" alt="town-img" />
            <p>Vilnius, Lithuania</p>
          </div>
          <div className="vision-town-card text-center">
            <img src="img/bg2/Limassol,Cyprus@2x.png" alt="town-img" />
            <p>Limassol, Cyprus</p>
          </div>
          <div className="vision-town-card text-center">
            <img src="img/bg2/Valletta,Malta@2x.png" alt="town-img" />
            <p>Valletta, Malta</p>
          </div>
          <div className="vision-town-card text-center">
            <img src="img/bg2/Sofia,Bulgaria@2x.png" alt="town-img" />
            <p>Sofia, Bulgaria</p>
          </div>
          <div className="vision-town-card text-center">
            <img src="img/bg2/KualaLumpur,Malaysia@2x.png" alt="town-img" />
            <p>KualaLumpur, Malaysia</p>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="vision-card-title">
          <p>Patners</p>
          <span></span>
        </div>
        <div className="vision-company-logo-box">
          <img src="img/companylogo/1.png" alt="company-logo" />
          <img src="img/companylogo/2.png" alt="company-logo" />
          <img src="img/companylogo/3.png" alt="company-logo" />
          <img src="img/companylogo/4.png" alt="company-logo" />
          <img src="img/companylogo/5.png" alt="company-logo" />
          <img src="img/companylogo/6.png" alt="company-logo" />
          <img src="img/companylogo/7.png" alt="company-logo" />
          <img src="img/companylogo/8.png" alt="company-logo" />
          <img src="img/companylogo/9.png" alt="company-logo" />
          <img src="img/companylogo/10.png" alt="company-logo" />
          <img src="img/companylogo/11.png" alt="company-logo" />
          <img src="img/companylogo/12.png" alt="company-logo" />
          <img src="img/companylogo/13.png" alt="company-logo" />
          <img src="img/companylogo/14.png" alt="company-logo" />
          <img src="img/companylogo/15.png" alt="company-logo" />
        </div>
      </div>
    </div>
  )
}
