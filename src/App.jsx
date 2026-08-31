import { useState } from 'react'
import cloudyDay from './assets/cloudy-day.svg'
import cloudyNight from './assets/cloudy-night.svg'
import day from './assets/day.svg'
import night from './assets/night.svg'
import stormy from './assets/stormy.svg'
import './App.css'
import WeatherForecast from './components/WeatherForecast/WeatherForecast';

function App() {

  const weatherForecasts = [
    {
      day: 'Mon',
      img: day,
      imgAlt: 'sun icon',
      conditions: 'sunny',
      time: 'Morning',
    },
    {
      day: 'Tue',
      img: night,
      imgAlt: 'moon icon',
      conditions: 'clear',
      time: 'Night',
    },
    {
      day: 'Wed',
      img: stormy,
      imgAlt: 'clouds with lightning icon',
      conditions: 'stormy',
      time: 'All Day',
    },
    {
      day: 'Thu',
      img: cloudyDay,
      imgAlt: 'sun overcast by clouds icon',
      conditions: 'overcast',
      time: 'Evening',
    },
    {
      day: 'Fri',
      img: cloudyNight,
      imgAlt: 'moon overcast by clouds icon',
      conditions: 'cloudy',
      time: 'Night',
    },
  ];

  const mapped = weatherForecasts.map(w => <WeatherForecast day={w.day} img={w.img} imgAlt={w.imgAlt} conditions={w.conditions} time={w.time} />
  )

  return (
    <>
      <h1>Local Weather</h1>
      <section>
        {mapped}
      </section>
    </>
  )
}

export default App
