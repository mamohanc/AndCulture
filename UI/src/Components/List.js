import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Modal from './Modal';

const List = ({data}) => {
  const [show,setShow]=useState(false);

    return (
      <>
        <article className="card" onClick={() => setShow(true)}>
          <div className="title">
           <strong>Name :</strong> {data.name}
          </div>
          <div className="type">
          <strong>Type :</strong> {data.brewery_type}
          </div>
          <div className="address">
            <strong>
            Address :
            </strong>
              &nbsp;{data.street} , {data.city} , {data.state} , {data.country}
          </div>
          <div className="url">
            <strong>
            Website :
            </strong>
            &nbsp;&nbsp;{data.website_url ? <a href={data.website_url} target="_blank">
             {data.website_url}
              </a>:"no data available"}
          </div>
          <button>
            <Link to={`/${data.id}`}>Details</Link>
          </button>
        </article>

        {show && (
          <Modal
            setShow={setShow}
            lat={data.latitude}
            long={data.longitude}
            name={data.name}
            state={data.state}
            city={data.city}
            zip={data.postal_code}
          />
        )}
      </>
    );
}

export default List
