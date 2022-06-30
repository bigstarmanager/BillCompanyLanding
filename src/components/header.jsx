export const Header = (props) => {
  return (
    <header id='header'>
      <div className='intro'>
        <div className='container'>
          <div className='intro-text'>
            <h1>
              {props.data ? props.data.title : 'Loading'}
            </h1>
            <p>{props.data ? props.data.paragraph : 'Loading'}</p>
            <div className="header-button">
              <a
                href='#features'
                className='btn btn-custom btn-lg page-scroll'
              >
                Learn More
              </a>{' '}
            </div>
            <div className="header-button">
              <a
                href='#features'
                className='btn btn-custom btn-lg page-scroll'
              >
                Learn More
              </a>{' '}
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
