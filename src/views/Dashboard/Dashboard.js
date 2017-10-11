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


class Dashboard extends Component {

  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col xs="12" lg="12">
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify"></i> Suites
              </CardHeader>
              <CardBlock className="card-body">
                <Table responsive striped>
                  <thead>
                    <tr>
                      <th>Description</th>
                      <th>Featured</th>
                      <th>See more</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Itabo Suite</td>
                      <td><i className="fa fa-check-circle"></i></td>
                      <td>
                        <Link to='/'>
                          <i className="fa fa-chevron-circle-right"></i>
                        </Link>
                      </td>
                    </tr>
                    <tr>
                      <td>Urban Steel</td>
                      <td><i className="fa fa-minus"></i></td>
                      <td>
                        <Link to='/'>
                          <i className="fa fa-chevron-circle-right"></i>
                        </Link>
                      </td>
                    </tr>
                  </tbody>
                </Table>
                <Pagination>
                  <PaginationItem disabled><PaginationLink previous href="#">Anterior</PaginationLink></PaginationItem>
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

export default Dashboard;
