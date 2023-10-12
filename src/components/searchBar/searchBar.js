import './searchBar.css';
import '../Form/form.css';
import { useDispatch, useSelector } from 'react-redux';
import { changeSearchField } from '../../redux/slices/searchSlice';

export default function SearchBar() {
  const search = useSelector(state => state.search);
  const dispatch = useDispatch();

  function handleSearchChange({ target }) {
    const { name, value } = target;

    dispatch(changeSearchField({ name, value }));
  }

  return (
    <form className='form'>
      <div className='form-control'>
        <label htmlFor='query'>Поиск</label>
        <input
          className='form-control__name'
          type='text'
          id='query'
          name='query'
          value={search.query}
          onChange={handleSearchChange}
          placeholder='Начните вводить наименование услуги'
          autoComplete='off'
        />
      </div>
    </form>
  );
}