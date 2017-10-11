import React, {Component} from "react";
import {
  Row,
  Col,
  Button,
  ButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Card,
  CardHeader,
  CardFooter,
  CardBlock,
  Form,
  FormGroup,
  FormText,
  Label,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupButton
} from "reactstrap";
import DatePicker from 'react-datepicker';
import moment from 'moment';
import $ from 'jquery';

import 'react-datepicker/dist/react-datepicker.css';

import ClientsList from './ClientsList';  

class Clients extends Component {
  constructor(props) {
    super(props);

    this.state = {
      startDate: null,
      clients: [],
    };

    $.ajax({
      success: (clients) => {
        this.setState({ clients });
      },
      type: 'get',
      url: 'https://test-bank-api.herokuapp.com/clients'
    });

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(date) {
    this.setState({
      startDate: date
    });
  }

  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col xs="12" sm="12">
            <Card>
              <CardHeader>
                <small>Formulario de </small>
                <strong>Clientes</strong>
              </CardHeader>
              <CardBlock className="card-body">
                <FormGroup>
                  <Label htmlFor="client_name">Nombre</Label>
                  <Input type="text" id="client_name" placeholder="Ingresa el nombre del cliente" />
                </FormGroup>
                <FormGroup>
                  <Label htmlFor="email-input">Correo Electrónico</Label>
                  <Input type="email" id="email-input" name="email-input" placeholder="Ingresa el correo electrónico" />
                </FormGroup>
                <FormGroup>
                  <Label htmlFor="date-picker">Fecha de nacimiento</Label>
                  <DatePicker
                    className="form-control"
                    openToDate={moment("1990-01-28")}
                    placeholderText="Fecha de nacimiento"
                    selected={this.state.startDate}
                    onChange={this.handleChange}
                    showYearDropdown
                    locale="es-sv"
                    dateFormatCalendar="MMMM"
                    scrollableYearDropdown
                    yearDropdownItemNumber={15}
                    shouldCloseOnSelect={false}
                  />
                </FormGroup>
              </CardBlock>
              <CardFooter>
                <Button type="submit" size="sm" color="primary"><i className="fa fa-dot-circle-o"></i> Submit</Button>
                <Button type="reset" size="sm" color="danger"><i className="fa fa-ban"></i> Reset</Button>
              </CardFooter>
            </Card>
            <ClientsList clients={this.state.clients} />
          </Col>
        </Row>
      </div>
    )
  }
}

export default Clients;
