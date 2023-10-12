import { useDispatch, useSelector } from 'react-redux';
import './form.css';
import { changeServiceField, endServiceEditing } from '../../redux/slices/formSlice';
import { addService, addServiceChange } from '../../redux/slices/listSlice';

export default function Form() {
  const form = useSelector(state => state.form);
  const dispatch = useDispatch();

  function handleInputChange( { target: { name, value } }) {
    dispatch(changeServiceField({ name, value }));
  }

  return (
    <form
      className='form'
      onSubmit={ev => {
        ev.preventDefault();
        const { name, price } = form;

        if (form.editingMode.state) {
          const { index } = form.editingMode;

          dispatch(addServiceChange({ index, name, price }));
          dispatch(endServiceEditing());
        } else {
          dispatch(addService({ name, price }));
        }
      }}
      onReset={ev => {
        ev.preventDefault();

        dispatch(endServiceEditing());
      }}
    >
      <div>
        <label htmlFor='name'>Услуга</label>
        <input
          className='form-control__name'
          type='text'
          id='name'
          name='name'
          required
          value={form.name}
          onChange={handleInputChange}
          placeholder='Например: замена...'
          autoComplete='off'
        />
      </div>
      <div className='form-control'>
        <label htmlFor='price'>Стоимость</label>
        <input
          className='form-control__price'
          type='number'
          id='price'
          name='price'
          min='1'
          max='9999999'
          required
          value={form.price}
          onChange={handleInputChange}
        />
      </div>
      <input
        className='form-control__button-save'
        type='submit'
        value='Сохранить'
      />
      {
        form.editingMode.state &&
        <input
          className='form-control__button-save'
          type='reset'
          value='Отменить'
        />
      }
    </form>
  );
}