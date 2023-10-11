import './tableRow.css';

export default function TableRow(props) {
  const {
    id,
    name,
    price,
    onDeleteClick: handleDeleteClick,
    onEditClick: handleEditClick
  } = props;

  return (
    <tr className='table-row' id={id}>
      <td>{name}</td>
      <td>{price}</td>
      <td>
        <a
          className='table-row-control__edit'
          href='#0'
          onClick={handleEditClick}
        >
          ✎
        </a>
        <a
          className='table-row-control__delete'
          href='#0'
          onClick={handleDeleteClick}
        >
          ✘
        </a>
      </td>
    </tr>
  );
}