import React from "react";
import axios from "axios";
import Weatherpage from "./Wetherpage";


export default class Header extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            search: "Kolkata",
            name: " ",
            country: " ",
            icon: null,
            coord: {
                lon: null,
                lat: null,
            },
            cloud: null,
            main: {
                temp: null,
                feels_like: null,
                temp_min: null,
                temp_max: null,
                pressure: null,
                humidity: null
            },
            wind: null,
        }
        this.searchupdate = this.searchupdate.bind(this);
    }
    componentDidMount = () => {
        axios.get(
            `https://api.openweathermap.org/data/2.5/weather?q=${this.state.search}&units=metric&appid=497e9bded202000a995acc52bde98caf`
        ).then((res) => {
            this.setState({
                name: res.data.name,
                country: res.data.country,
                icon: res.data.weather[0].icon,
                temp: res.data.main.temp,
                cloud: res.data.clouds.all,
                feels_like: res.data.main.feels_like,
                temp_min: res.data.main.temp_min,
                temp_max: res.data.main.temp_max,
                pressure: res.data.main.pressure,
                humidity: res.data.main.humidity,
                wind: res.data.wind.speed
            });

        })
    }
    searchupdate = (e) => {
        this.setState({ search: e.target.value });
    }

    render() {
        return (
            <>
                <nav class="navbar navbar-expand-lg">
                    <div class="container px-5 py-2">
                        <i class="fas fa-thermometer-three-quarters temp-icon"></i><a class="navbar-brand logo" href="https://www.google.co.in/">React<br /> Wether App</a>
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <form class="d-flex ml-auto">
                                <input class="form-control me-2 search-input" type="search" placeholder="Search Worldwide By City Name" aria-label="Search" onChange={this.searchupdate} />
                                <button class="btn btn-outline-success" type="button" onClick={this.componentDidMount}>Search</button>
                            </form>
                        </div>
                    </div>
                </nav>

                <Weatherpage
                    name={this.state.name}
                    country={this.state.country}
                    temp={this.state.temp}
                    icon={this.state.icon}
                    feels_like={this.state.feels_like}
                    temp_min={this.state.temp_min}
                    temp_max={this.state.temp_max}
                    pressure={this.state.pressure}
                    humidity={this.state.humidity}
                    cloud={this.state.cloud}
                    wind={this.state.wind}
                />
            </>
        );
    }

}