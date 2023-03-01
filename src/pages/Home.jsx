import React from 'react'
import { useDispatch } from 'react-redux'
import { setNameTrainerGlobal } from '../store/slice/nameTrainer.slice'
import "./styles/Home.css"

const Home = () => {

    const dispatch = useDispatch()
    const handleSubmit = (e) => { 
        e.preventDefault()
        const nameTrainer = e.target.nameTrainer.value 
        dispatch(setNameTrainerGlobal(nameTrainer))
    }
  return (
    <main className='home'>
        <section className='home__section'>
            <div className='home__name'>
                <img className='home__img' src="/images/pokedex.png" alt="" />
            </div>
            <h2 className='home__title'>Hello trainer!</h2>
            <p className='home__text'>Give me your name to start!</p>
            <form className='home__form' onSubmit={handleSubmit}>
                <input 
                    className='home__input'
                    required 
                    id='nameTrainer' 
                    type="text" 
                    placeholder='your name...'
                />
                <button className='home__btn'>Start</button>
            </form>
        </section>
            <footer className='home-header'>
                <div className='home-header__red'> </div>
                <div className='home-header__black'>
                    <div className='home-header__button-pokeball'>
                        <img  src="/images/pokebola.gif" alt="" />
                    </div>
                </div>
            </footer>
    </main>
  )
}

export default Home