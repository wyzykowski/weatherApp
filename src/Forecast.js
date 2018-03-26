import React, { Component } from 'react';
import { Field, Container, Control, Input, Column, Button, Columns } from 'bloomer';
import api from './utils/api';
import DayItem from './DayItem';

class Forecast extends Component {

  constructor(props) {
    super(props);
    this.state = {
      city: '',
      forecastData: [],
      loading: true
    };

    this.handleSubmitCheckForm = this.handleSubmitCheckForm.bind(this);
    this.handleUpdateCity = this.handleUpdateCity.bind(this);
  }
  handleSubmitCheckForm() {
    api.getForecast(this.state.city)
      .then(function (res) {
        this.setState(function () {
          return {
            loading: false,
            forecastData: res,
          }
        })
      }.bind(this))
  }

  handleUpdateCity(e) {
    var city = e.target.value;
    this.setState(function () {
      return {
        city: city
      }
    });
  }

  render() {
    const loading = this.state.loading;

    const forecast = loading ? (
      <h1 className='forecast-header'> Write your city name and click 'Check weather button'</h1>
    ) : (
        <div>
          <h1 className='forecast-header'>{this.city}</h1>
          <div className='columns'>
            {this.state.forecastData.list.map(function (listItem) {
              return <DayItem key={listItem.dt} day={listItem} />
            }, this)}
          </div>
        </div>
      );
    return (
      <section className="section">
        <Container>
          <Columns isCentered>
            <Column isSize='1/3'>
              <Field className="is-grouped">
                <Control>
                  <Input
                    type="text"
                    onChange={this.handleUpdateCity}
                    value={this.state.city}
                    placeholder='City name' />
                </Control>
                <Control>
                  <Button
                    isColor='primary'
                    onClick={this.handleSubmitCheckForm}>
                    Check weather
                    </Button>
                </Control>
              </Field>
            </Column>
          </Columns>
        </Container>
        <Container>
          <Columns isCentered>
            <Column isSize='1/3'>
              {forecast}
            </Column>
          </Columns>
        </Container>
      </section>
    );
  }
}

export default Forecast;
