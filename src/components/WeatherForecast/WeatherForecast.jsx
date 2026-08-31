import WeatherData from '../WeatherData/WeatherData'
import WeatherIcon from '../WeatherIcon/WeatherIcon'
import './WeatherForecast.css'

export default function WeatherForecast({ day, img, imgAlt, conditions, time }) {
    return (
        <div className="weather">
            <WeatherIcon img={img} imgAlt={imgAlt} />
            <WeatherData day={day} conditions={conditions} time={time} />
        </div>
    )
}