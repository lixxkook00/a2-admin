import React, { useEffect } from 'react'
import './Admin.scss'

import Token from '../../components/Token'

export default function Admin() {
   
    

  return (
    <div className="admin">
        <div className="container">
            <div className="row">
               <div className="col-xl-12 admin-title">
                    AR FOREX TOKEN LOCKED EVENTS
               </div>


               <div className="col-xl-12 admin-logo centering">
                   <img src="./img/logo.png" alt="" />
               </div>

                <div className="col-xl-12 admin-address-wallet">
                    378687234873687x3768736483276478
                </div>

               <div className="col-xl-12 admin-subtitle">
                   Locked AFT Tokens - 15,000,000 AFT (15%)
               </div>

                <Token percent={80} data={''}/>
                <Token percent={70} data={''}/>
                <Token percent={60} data={''}/>
                <Token percent={50} data={''}/>
                <Token percent={40} data={''}/>
                <Token percent={30} data={''}/>
            </div>
        </div>
    </div>
  )
}
