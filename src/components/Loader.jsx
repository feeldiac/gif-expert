import PropTypes from 'prop-types'
const Loader = ({ isLoading }) => {
    const styles =
        { display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', minHeight: '300px' }

    return (
        isLoading && <div style={styles}>😎 Carganding...</div>
    )
}

Loader.propTypes = {
    isLoading: PropTypes.bool
}

export default Loader