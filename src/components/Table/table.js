import { useDispatch, useSelector } from 'react-redux';
import './table.css';
import { removeService } from '../../redux/slices/listSlice';
import { editService } from '../../redux/slices/formSlice';
import TableRow from './TableRow/tableRow';

export default function Table() {
  const services = useSelector(state => state.list);
  const search = useSelector(state => state.search);
  const dispatch = useDispatch();
  const tableLength = 3;

  function handleDeleteClick(id) {
    return dispatch(removeService(id));
  }

  function handleEditClick(id) {
    const index = services.findIndex(service => service.id === id);
    const { name, price } = services[index];

    return dispatch(editService({ name, price, editingMode: { state: true, index } }));
  }

  let filteredList = null;

  if (search.query) {
    const regexp = new RegExp(`${search.query}`, 'i');
    filteredList = services.map(({ id, name, price }) => {
      if (!name.match(regexp)) return null;

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
    });

    if (!filteredList.filter(Boolean).length) {
      filteredList = (
        <tr>
          <td colSpan={tableLength}>
            По вашему запросу ничего не найдено
          </td>
        </tr>
      );
    }
  }

  const list = services.map(({ id, name, price }) => {
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
  })

  return (
    <table className='table'>
      <thead>
        <tr>
          <th>Услуга</th>
          <th>Стоимость</th>
          <th>Действия</th>
        </tr>
      </thead>
      <tbody>{filteredList || list}</tbody>
    </table>
  );
}