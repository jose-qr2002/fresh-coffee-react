import PropTypes from 'prop-types';
import { formatearDinero } from '../helpers';
import useQuiosco from '../hooks/useQuiosco';

export default function Producto({producto, botonAgregar=false, botonDisponible = false }) {
    const { nombre , imagen , precio } = producto
    const { handleClickModal, handleSetProducto, handleClickProductoAgotado } = useQuiosco()

    return (
        <div className='border p-3 shadow bg-white flex flex-col'>
            <img 
                src={`/img/${imagen}.jpg`} // Agregar "/" al inicio para indicar el host
                alt={`imagen ${nombre}`}
                className='w-full'    
            />
            <div className='p-5 flex-1 flex flex-col justify-between'>
                <h3 className='text-2xl font-bold'>{nombre}</h3>
                <p className='mt-5 font-black text-4xl text-amber-500'>{formatearDinero(precio)}</p>
            </div>
            {botonAgregar && (
                <button
                    type='button'
                    className='bg-indigo-600 hover:bg-indigo-800 text-white w-full mt-5 p-3 uppercase font-bold'
                    onClick={() => {
                        handleClickModal();
                        handleSetProducto(producto);
                    }}
                >
                    Agregar
                </button>
            )}
            {botonDisponible && (
                <button
                    type='button'
                    className='bg-indigo-600 hover:bg-indigo-800 text-white w-full mt-5 p-3 uppercase font-bold'
                    onClick={() => {handleClickProductoAgotado(producto.id)}}
                >
                    Producto Agotado
                </button>
            )}
        </div>
    )
}

Producto.propTypes = {
    producto: PropTypes.object.isRequired, // Ajusta el tipo de dato según tu caso
  };