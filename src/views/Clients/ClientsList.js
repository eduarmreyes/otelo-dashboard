import React, {Component} from "react";
import {Link} from 'react-router-dom';
import {
  Badge,
  Row,
  Col,
  Card,
  CardHeader,
  CardBlock,
  Table,
  Pagination,
  PaginationItem,
  PaginationLink
} from "reactstrap";

import ClientListRow from './ClientListRow';

class ClientsList extends Component {
  render() {
    const clients = this.props.clients.map((client) => {
      return <ClientListRow key={client.id} client={client} />
    });

    return (
      <div className="animated fadeIn">
        <Row>
          <Col xs="12" lg="12">
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify"></i> Clientes
              </CardHeader>
              <CardBlock className="card-body">
                <Table responsive striped>
                  <thead>
                    <tr>
                      <th>Nombre</th>
                      <th>Correo Electrónico</th>
                      <th>Fecha de Nacimiento</th>
                    </tr>
                  </thead>
                  <tbody>
                    {clients}
                  </tbody>
                </Table>
                <Pagination>
                  <PaginationItem disabled><PaginationLink previous href="#">Prev</PaginationLink></PaginationItem>
                  <PaginationItem active>
                    <PaginationLink href="#">1</PaginationLink>
                  </PaginationItem>
                  <PaginationItem><PaginationLink href="#">2</PaginationLink></PaginationItem>
                  <PaginationItem><PaginationLink next href="#">Siguiente</PaginationLink></PaginationItem>
                </Pagination>
              </CardBlock>
            </Card>
          </Col>
        </Row>

    </div>
    )
  }
}

export default ClientsList;
