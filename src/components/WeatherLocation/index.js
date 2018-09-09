import React, { Component }  from 'react';
import Location from './Location';
import WeatherData from './WeatherData/index';
import {
    SUN,
    WINDY,
} from './../../constants/weather';
import './styles.css';

const data = {
    temperature: 5,
    weatherState: SUN,
    humidity: 10,
    wind: '10 m/s',
}

const data2 = {
    temperature: 15,
    weatherState: WINDY,
    humidity: 20,
    wind: '10 m/s',
}

class WeatherLocation extends Component {

    constructor(){
        super();
        this.state = {
            city: 'Buenos Aires',
            data: data,
        };
    }

    handelUpdateClick = () => {
        console.log("actualizado");
        this.setState({
            city: "Buenos Aires!!",
            data: data2,
        });
    }

    render(){
        const { city, data } = this.state;
        return(
            <div className='weatherLocationCont'>
                <Location city={city}/>
                <WeatherData data={data}/>
                <button onClick = {this.handelUpdateClick} >Actualizar</button> 
            </div>
        );
    }    
}

export default WeatherLocation;
