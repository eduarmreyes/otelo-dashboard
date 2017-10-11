import React from 'react';
import moment from 'moment';

const ClientListRow = ({client}) => {
  return (
    <tr>
      <td>{client.name}</td>
      <td>{client.email}</td>
      <td>{moment(client.birthday).format('DD-MM-YYYY')}</td>
    </tr>
  );
};

export default ClientListRow;