import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { GetAppAction } from '../../redux/action/AppAction'
import './appituneity.css'
export const Appituneity = () => {
    const {appits , loadding , error} = useSelector(state => state.AppituneityReducers)
    console.log(appits)
    const dispatch = useDispatch()
    useEffect (() => {
     dispatch(GetAppAction())
    } , [dispatch])

  
  return (
    <div className='Appituneity'>
          <div className="container">
        <h2 id='address'>Why Choose appituneity?</h2>

          <div className="row">
            <div className="col-lg-12 col-md-12 ">
              <div className=" row">
              {loadding && <div>Loadding ........ </div>}
            {error && <div className="error"> {error}</div>}
                   
                    {appits?.map((item) => (
                      
                        <div
                        className="body col-lg-3 col-md-6 col-sm-12 "
                        key={item.id}
                      >
                      <div className="item_body">
                      <img src={`./assetes/appituneity/${item.icon}`} alt="icon" className='icon'/>
                      <h5 className="item_title">{item.title}</h5>
                      <h6 className="item_des"> {item.des} </h6>
                      </div>
                     
                      
                      </div>
                    ))}
              

              
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}
