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
                href='https://en.wikipedia.org/wiki/Cryptocurrency'
                target="blank"
                className='btn btn-custom btn-lg page-scroll'
              >
                Cryptocurrency
              </a>{' '}
            </div>
            <div className="header-button">
              <a
                href='https://en.wikipedia.org/wiki/Blockchain'
                target="blank"
                className='btn btn-custom btn-lg page-scroll'
              >
                Blockchain
              </a>{' '}
            </div>
            <div className="header-button">
              <a
                href='https://en.wikipedia.org/wiki/Metaverse'
                target="blank"
                className='btn btn-custom btn-lg page-scroll'
              >
                Metaverse
              </a>{' '}
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
