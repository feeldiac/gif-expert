import PropTypes from 'prop-types';
import { useGetGifs } from '../hooks';
import GifItem from './GifItem';
import Loader from './Loader';

const GifGrid = ({ category, limit }) => {
    const { images, isLoading } = useGetGifs({ category, limit });

    return (
        <>
            <p key={category} style={{ fontWeight: 'bold' }}>{category}</p>

            <Loader isLoading={isLoading} />

            <div className='card-grid'>
                {images.map((image) => (
                    <GifItem key={image?.id} {...image} />
                ))}
            </div>
        </>
    )
}

GifGrid.propTypes = {
    category: PropTypes.string.isRequired,
    limit: PropTypes.number
}

GifGrid.defaultProps = {
    limit: 10
}


export default GifGrid