import home from '../images/home.png';
import scroll from '../images/scroll.png';

const Home = () => {
    return (
        <section className='home grid'>
            <div className='home__container'>
                <div className='home__content container'>
                    <h1 className='home__title'>
                        Elige tu café favorito y disfruta<span>.</span>
                    </h1>
                    <p className='home__description'>
                    Compra los mejores y deliciosos cafés.
                    </p>
                    <div className='home__data'>
                        <div className='home_data-group'>
                            <h2 className='home__data-number'>120+</h2>
                            <h3 className='home__data-title'>Testimonios</h3>
                            <p className='home__data-description'>
                            Testimonios de varios clientes que confían en nosotros.
                            </p>
                        </div>
                        <div className='home_data-group'>
                            <h2 className='home__data-number'>340+</h2>
                            <h3 className='home__data-title'>Productos Exclusivos</h3>
                            <p className='home__data-description'>
                            Elaboración premium con ingredientes de calidad.
                            </p>
                        </div>
                    </div>
                    <a href='#specialty'>
                        <img src={scroll} alt='Scroll' className='home__scroll' />
                    </a>
                </div>
            </div>
            <img src={home} alt='' className='home__img' />
        </section>
    )
}

export default Home;