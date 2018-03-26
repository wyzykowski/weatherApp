import React from 'react';
import utils from './utils/helpers';

const getDate = utils.getDate;
const convertTemp = utils.convertTemp;

function DayItem (props) {
  var date = getDate(props.day.dt);
  var icon = props.day.weather[0].icon;
  console.log(props);
  return (
    <div onClick={props.onClick} className='column'>
      <img className='weather' src={'/images/weather-icons/' + icon + '.svg'} alt='Weather' />
      <h2 className='subheader'>{date}</h2>
      <p>min: {convertTemp(props.day.temp.min)}°C</p>
      <p>max: {convertTemp(props.day.temp.max)}°C</p>
    </div>
  )
}

export default DayItem;