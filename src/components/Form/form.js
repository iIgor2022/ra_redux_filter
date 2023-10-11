/* eslint-disable react/prop-types */
import { connect } from 'react-redux';
import { addService, addServiceChanges, changeServiceField, endServiceEditing } from '../../redux/actions/actionCreator';
import './form.css';
import PropTypes from 'prop-types';

function From(props) {
  const {
    form,
    onServiceSubmit,
    onChangesSubmit,
    onReset,
    onChange,
  } = props;

  function handleInputChange({ target }) {
    const { name, value } = target;

    onChange(name, value);
  }

  return (
    <form
      className='form'
      onSubmit={ev => {
        ev.preventDefault();
        const { name, price } = form;

        if (form.editingMode.state) {
          const { index } = form.editingMode;

          onChangesSubmit(index, name, price);
          onReset();
        } else {
          onServiceSubmit(name, price);
        }
      }}
      onReset={ev => {
        ev.preventDefault();
        
        onReset();
      }}
    >
      <div className='form-control'>
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
          required
          min='1'
          max='9999999'
          value={form.price}
          onChange={handleInputChange}
          onFocus={({ target }) => target.select()}
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
          className='form-control__button-reset'
          type='reset'
          value='Отменить'
        />
      }
    </form>
  )
}

From.propTypes = {
  form: PropTypes.shape({
    name: PropTypes.string,
    price: PropTypes.number,
  }).isRequired,
  onServiceSubmit: PropTypes.func.isRequired,
  onChangesSubmit: PropTypes.func.isRequired,
  onReset: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
}

const mapStateToProps = (state) =>({
  form: state.form,
})

const mapDispatchToProps = ({
  onServiceSubmit: addService,
  onChangesSubmit: addServiceChanges,
  onReset: endServiceEditing,
  onChange: changeServiceField,
});

export default connect(mapStateToProps, mapDispatchToProps)(From);