import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import "./styles/Pokemon.css"

const Pokemon = () => {
  const [pokemon, setPokemon] = useState()
  
  const {id} = useParams()

  useEffect(() => {
    const URL = `https://pokeapi.co/api/v2/pokemon/${id}`
    axios.get(URL)
      .then((res) => setPokemon(res.data))
      .catch((err) => console.log(err))
  })

  return (
    <main className='pokemon'>
      {/* Parte superior */}
      <div className='content'>
        <section className='pokemon__content-img'>
          <section className={`pokemon__banner  bg-lg-${pokemon?.types[0].type.name}`}>
            <div>
              <img className='pokemon__img' src={pokemon?.sprites.other.home.front_default} alt="" />
            </div>
          </section>
        </section>

        {/* Body */}
        <section className='pokemon__content-date'>
          <h2 className='pokemon__date-number'>#{pokemon?.id}</h2>
          <div className='pokemon__date-nameContent'>
            <hr className='pokemon__date-name-HR'/>
            <h2 className='pokemon__date-name'>{pokemon?.name}</h2>
            <hr className='pokemon__date-name-HR'/>
          </div>

          <div className='pokemon__date-info'>
            <div className='pokemon__date'>
              <h5 className='pokemon__date-Title'>Weight</h5>
              <h4 className='pokemon__date-Number'>{pokemon?.weight}</h4>
            </div>
            <div className='pokemon__date'>
              <h5 className='pokemon__date-Title'>Height</h5>
              <h4 className='pokemon__date-Number'>{pokemon?.height}</h4>
            </div>
          </div>

          <div className='pokemon__TypeAbilities'>
            <div className='pokemon__type-Content'>
              <h3 className='pokemon__type-title'>Type</h3>
              <div className='pokemon__type-type'>
                {
                  pokemon?.types.map(
                    type => <div className='pokemon__type-typeClass' key={type.type.name}><span>{type.type.name}</span></div>
                  )
                }
              </div>
            </div>
            <div className='pokemon__type-Content'>
              <h3 className='pokemon__type-title'>Abilities</h3>
              <div className='pokemon__type-type'>
                {
                  pokemon?.abilities.map(
                    ability => <div className='pokemon__type-typeClass' key={ability.ability.name}><span>{ability.ability.name}</span></div>
                  )
                }
              </div>
            </div>
          </div>

          {/* Stats */}
          <section className='stats'>
              <div className='bar-title'>
                <h2 className='stats__title'>Stats</h2> <hr className='bar-hr'/>
              </div>
            <section className='stats'>
              {
                pokemon?.stats.map(stat => (
                  <article className='stats__statContent' key={stat.stat.name}>
                    <div className='stats__type'>
                      <h4 className='stats__name'>{stat.stat.name}</h4>
                      <h5 className='stats__baseStat'>{stat.base_stat}/150</h5>
                    </div>
                    <div className='bars'>
                      <div className={`bars__color`} style={{maxWidth: `${stat.base_stat}vh` }} ></div>
                    </div>
                  </article>
                ))
              } 
            </section>
          </section>
        </section>
      </div>
          
          <section className='movements content'>
              <div className='movements__contentsTitle'>
              <div className='bar-title'>
                <h2 className='movements__title'>Movements</h2> <hr className='bar-hr' />
              </div>
              </div>
              <div className='movements__type'>
                {
                  pokemon?.moves.map(move => <div className='movements__moves'> {move.move.name} </div>)
                }
              </div>
          </section>
        

    </main>
  )
}

export default Pokemon