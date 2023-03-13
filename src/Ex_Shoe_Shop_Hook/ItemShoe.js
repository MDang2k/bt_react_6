import React from 'react'

export default function ItemShoe({item}) {
  return (
    <div className="col-3 p-4">
        <div className="card ">
          <img src={item.image} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{item.name}</h5>
            <p className="card-text">{item.price}</p>
            <a
              href="#"
              className="btn btn-primary"
            >
              Add to card
            </a>
          </div>
        </div>
      </div>
  )
}
