export const History1 = (props) => {
  return (
    <div id='history' className='text-center'>
      <div className='container'>
        <div className="history1-content">
          <h3 className="history1-title">
            {props.data ? props.data.title : 'Loading'}
          </h3>
          <p className="history1-paragraph">
            {props.data ? props.data.paragraph : 'Loading'}
          </p>
        </div>
      </div>
    </div>
  )
}
