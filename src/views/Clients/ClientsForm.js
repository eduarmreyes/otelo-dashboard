import React from 'react';
import { Field, reduxForm } from 'redux-form/immutable';
import validate from './validateForm';
import {
  Button,
  ButtonDropdown,
  Card,
  CardHeader,
  CardFooter,
  CardBlock,
  Col,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Form,
  FormGroup,
  FormText,
  HelpBlock,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  Label,
} from "reactstrap";
import DatePicker from 'react-datepicker';
import moment from 'moment';

import 'react-datepicker/dist/react-datepicker.css';

/*
 * GetError() - Get any validation error messages on the form.
 * Return {message.key} - language key.
 */
function getError(error) {
  let message = '';
  switch (error) {
    case 'required_error':
      message = "Requerido";
      break;
    case 'invalid_error':
      message = "Inválido";
      break;
    default:
      message = "Requerido";
  }
  return message;
}

const renderField = ({ input, placeholderIdLanguage, name, type, meta: { touched, error } }) => (
  <FormGroup
    controlId="formHorizontalEmail"
    validationState={touched && error ? 'error' : null}
  >
    <Col sm={12}>
      <InputText
        type={type}
        name={name}
        {...input}
      >
      </InputText>
      {touched && error && <HelpBlock>{getError(error)}</HelpBlock> }
    </Col>
  </FormGroup>
);

const ClientsForm = (props) => {
  const { handleSubmit, handleChange, pristine, reset, submitting } = props;

  return (
    <Card>
      <CardHeader>
        <small>Formulario de </small>
        <strong>Clientes</strong>
      </CardHeader>
      <CardBlock className="card-body">
      <Form onSubmit={handleSubmit} noValidate>
        <Field
          name="name"
          id="name"
          type="text"
          component={renderField}
          placeholderText="Nombre del cliente"
        />
        <Field
          name="email"
          id="email"
          type="email"
          component={renderField}
          placeholderText="Correo Electrónico"
        />
        <FormGroup>
          <Label htmlFor="date-picker">Fecha de nacimiento</Label>
          <DatePicker
            className="form-control"
            openToDate={moment("1990-01-28")}
            placeholderText="Fecha de nacimiento"
            onChange={handleChange}
            showYearDropdown
            locale="es-sv"
            dateFormatCalendar="MMMM"
            scrollableYearDropdown
            yearDropdownItemNumber={15}
            shouldCloseOnSelect={false}
          />
        </FormGroup>
        <FormGroup>
          <Col sm={12}>
            <Button
              bsStyle="default"
              type="submit"
              bsSize="large"
              block
              className="text-uppercase"
              disabled={submitting}
            >
              <i className="fa fa-dot-circle-o"></i> Guardar
            </Button>
          </Col>
        </FormGroup>
      </Form>
      </CardBlock>
      <CardFooter>
        <Button type="submit" size="sm" color="primary"><i className="fa fa-dot-circle-o"></i> Submit</Button>
        <Button type="reset" size="sm" color="danger"><i className="fa fa-ban"></i> Reset</Button>
      </CardFooter>
    </Card>
  );
};

export default ClientsForm;