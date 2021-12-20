import React from 'react'
import Locator from './Locator';

const Modal = ({name,state,city,zip,lat,long,setShow}) => {
    return (
      <>
        <div className="modal">
          {setShow && <div className="modal-overlay" onClick={() => setShow(false)}></div>}
          <div className="modal-details">
            <div className="modal-header">
              <div className="modal-title">{name}</div>
              <div className="close">
                {setShow && <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  onClick={() => setShow(false)}
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                    clipRule="evenodd"
                  />
                </svg>}
              </div>
            </div>
            <div className="modal-body">
              {city}, {state} , {zip}
            </div>
            <Locator width={600} height={400} lat={lat} long={long}/>
          </div>
        </div>
      </>
    );
}

export default Modal
