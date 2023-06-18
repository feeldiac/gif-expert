import PropTypes from 'prop-types'
import { useState } from 'react'
const AddCategory = ({ onAddCategory }) => {

    const [value, setValue] = useState('');

    const onSubmit = (event) => {
        event.preventDefault();

        if (value.trim().length <= 1) return;

        onAddCategory(value), setValue('');
    }

    const onInputChange = ({ target: { value } }) => {
        setValue(value);
    }

    return (
        <form onSubmit={onSubmit}>
            <input type="text" placeholder="Search Gif" value={value} onChange={onInputChange} />
        </form>
    )
}

AddCategory.propTypes = {
    onAddCategory: PropTypes.func.isRequired
}

export default AddCategory