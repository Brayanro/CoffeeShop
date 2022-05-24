import home from '../images/home.png';
import scroll from '../images/scroll.png';

const Home = () => {
    return (
        <section className='home grid' id='home'>
            <div className='home__container'>
                <div className='home__content container'>
                    <h1 className='home__title'>
                        Choose Your Favorite Coffee And Enjoy<span>.</span>
                    </h1>
                    <p className='home__description'>
                        Buy the best and delicious coffees.
                    </p>
                    <div className='home__data'>
                        <div className='home_data-group'>
                            <h2 className='home__data-number'>120K</h2>
                            <h3 className='home__data-title'>Testimonials</h3>
                            <p className='home__data-description'>
                                Testimonials from various customers who trust us.
                            </p>
                        </div>
                        <div className='home_data-group'>
                            <h2 className='home__data-number'>340+
                            </h2>
                            <h3 className='home__data-title'>Exclusive Product
                            </h3>
                            <p className='home__data-description'>
                                Premium preparation with quality ingredients.
                            </p>
                        </div>
                    </div>
                    <a href='#specialty'>
                        <img src={scroll} alt='' className='home__scroll'/>
                    </a>
                </div>
            </div>
            <img src={home} alt='' className='home__img'/>
        </section>
    )
}

export default Home;