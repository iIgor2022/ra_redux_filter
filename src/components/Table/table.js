/* eslint-disable react/no-unknown-property */
import { connect } from 'react-redux';
import { editService, removeService } from '../../redux/actions/actionCreator';
import './table.css';
import TableRow from './TableRow/tableRow';
import PropTypes from 'prop-types';

function Table(props) {
  const {
    services,
    onRemove,
    onEdit
  } = props;

  function handleDeleteClick(id) {
    return onRemove(id);
  }

  function handleEditClick(id) {
    const index = services.findIndex((service) => service.id === id);
    const { name, price } = services[index];

    return onEdit(name, price, { state: true, index });
  }

  return (
    <table className='table'>
      <thead>
        <tr>
          <th>Услуга</th>
          <th>Стоимость</th>
          <th>Действия</th>
        </tr>
      </thead>
      <tbody>
        {services.map(service => {
          const { id, name, price } = service;

          return (
            <TableRow
              key={id}
              id={id}
              name={name}
              price={price}
              onDeleteClick={() => handleDeleteClick(id)}
              onEditClick={() => handleEditClick(id)}
            />
          );
        })}
      </tbody>
    </table>
  );
}

Table.propTypes = {
  services: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    price: PropTypes.number,
  })).isRequired,
  onRemove: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => ({
  services: state.list,
});

const mapDispatchToProps = ({
  onRemove: removeService,
  onEdit: editService
});

export default connect(mapStateToProps, mapDispatchToProps)(Table);