import React from 'react'
import './Categories.scss'
import {Link} from 'react-router-dom'

export const Categories = () => {
  return (
    <div className='categories'>
        <div className="col">
            <div className="row">
                <img src="https://images.pexels.com/photos/15283426/pexels-photo-15283426.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                <button>
                    <Link className='link' to='/products/1'>Sale</Link>
                </button>
            </div>
            <div className="row"><img src="https://images.pexels.com/photos/15283354/pexels-photo-15283354.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                <button>
                    <Link className='link' to='/products/1'>Sale</Link>
                </button></div>
        </div>
        <div className="col">
            <div className="row"><img src="https://images.pexels.com/photos/15283273/pexels-photo-15283273.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                <button>
                    <Link className='link' to='/products/1'>Sale</Link>
                </button></div>
        </div>
        <div className="col col-l">
            <div className="row">
                <div className="col">
                    <div className="row"><img src="https://images.pexels.com/photos/15283440/pexels-photo-15283440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                <button>
                    <Link className='link' to='/products/1'>Sale</Link>
                </button></div>
                </div>
                <div className="col">
                    <div className="row"><img src="https://images.pexels.com/photos/15283320/pexels-photo-15283320.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                <button>
                    <Link className='link' to='/products/1'>Sale</Link>
                </button></div>
                </div>
            </div>
            <div className="row"><img src="https://images.pexels.com/photos/15283275/pexels-photo-15283275.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                <button>
                    <Link className='link' to='/products/1'>Sale</Link>
                </button></div>
        </div>
    </div>
  )
}
