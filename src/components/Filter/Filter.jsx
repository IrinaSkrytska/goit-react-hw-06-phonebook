import PropTypes from 'prop-types';
import css from './Filter.module.css';
import { useDispatch } from 'react-redux';
import { findContact } from 'redux/phonebookSlice';

const Filter = ({ value }) => {
  const dispatch = useDispatch();

  return (
    <div>
      <label className={css.filter}>
        {'Find contacts by name'}
        <input
          className={css.filter__input}
          type="text"
          name="filter"
          value={value}
          onChange={e => dispatch(findContact(e.currentTarget.value))}
        />
      </label>
    </div>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
};

export default Filter;
