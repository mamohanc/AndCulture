import React, { useContext } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import Locator from './Components/Locator';
import GLOBAL_CONTEXT from './Context';
import Modal from './Components/Modal';
const Details = () => {
    const params=useParams();
    console.log(params)
    const {list}=useContext(GLOBAL_CONTEXT);
    const brew=list.find(item=>item.id==params.id);
    console.log(brew)
    return (
      <>
        <section className="hero">
          <main className="container">
            <div className="title">
              Open Breweries
              <hr />
             
              
            </div>
          </main>
        </section>
        <section className="details">
           <div className='content'>
                      <div className='main'>
                      <h1>{brew.name}</h1>
           <h3>
                {brew.street}, {brew.city}, {brew.state}
              </h3>
                      </div>
          <div className='secondary'>
            <button><NavLink className="link" to="/">Back To List</NavLink></button>
          </div>
           </div>
          <Locator
            width="100%"
            height={300}
            lat={brew.latitude}
            long={brew.longitude}
          />
        </section>
      
      </>
    );
}

export default Details
