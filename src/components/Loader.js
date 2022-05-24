import gif from '../images/loadcoffee.gif';

// Loader
window.onload = () => {
    const load = document.getElementById('load');
    setTimeout(() => {
        load.style.display = 'none'
    }, 800);
}

const Loader = () => {
    return (
        <div className='load' id='load'>
            <img src={gif} alt='Gif' className='load__gif' />
        </div>
    )
}

export default Loader;
