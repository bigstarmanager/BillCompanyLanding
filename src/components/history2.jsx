export const History2 = (props) => {
  return (
    <div id="history-company-bg" className='text-center'>
      <div className='container'>
        <div className="history2-content">
          <h2 className="history2-title">
            {props.data ? props.data.title : 'Loading'}
          </h2>
          <p className="history2-paragraph">
            {props.data ? props.data.paragraph : 'Loading'}
          </p>
        </div>
      </div>
    </div>
  )
}
