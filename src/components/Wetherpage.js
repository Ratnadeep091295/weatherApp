import React from "react";

export default function Weatherpage(props) {
    return (
        <>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-3"></div>
                    <div className="col-md-6">
                        <div className="main-deta mt-5">
                            <h3 className="city-name">{props.name}</h3>
                            <h1 className="temp">{Math.ceil(props.temp)}<sup>o C</sup></h1>
                            <div className="row p-2">
                                <div className="col-md-5 text-right">
                                <img typeof="foaf:Image" class="img-responsive" src="https://developer.accuweather.com/sites/default/files/03-s.png" width="100" height="60" alt="Mostly Cloudy" title="Mostly Cloudy" />
                                </div>
                                <div className="col-md-7 text-left brdr">
                                    <p className='tempmax-min'>{Math.ceil(props.temp_max)}<sup>o C</sup>&nbsp;<i class="fas fa-arrow-up text-primary"></i>&nbsp;&nbsp;/&nbsp;&nbsp;{Math.floor(props.temp_min)}<sup>o C</sup>&nbsp;<i class="fas fa-arrow-down text-danger"></i></p>
                                    <p className='feels_like'>Feels Like - {Math.ceil(props.feels_like)}<sup>O</sup></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3"></div>
                    <div className="col-md-3"></div>
                    <div className="col-md-2">
                        <div className="main-deta mt-3 d-flex  justify-content-around">
                            <img className="icon" src=".\icon\humidity.png" alt="Humidity"/>
                            <p className="secendery-data">{props.humidity}%</p>
                        </div>
                    </div>
                    <div className="col-md-2">
                        <div className="main-deta mt-3 d-flex justify-content-around">
                            <img className="icon" src=".\icon\wind.png" alt="wind"/>
                            <p className="secendery-data">{props.wind}<span>  km/h</span></p>
                        </div>
                    </div>
                    <div className="col-md-2">
                        <div className="main-deta mt-3 d-flex justify-content-around">
                            <img className="icon" src=".\icon\cloudy.png" alt="cloudy"/>
                            <p className="secendery-data">{props.cloud}%</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );

}