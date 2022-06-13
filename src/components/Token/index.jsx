import React from 'react'
import './Token.scss'
import ProgressBar from 'react-bootstrap/ProgressBar'

export default function Token({percent,date}) {

    const lockHours = 2232;
    const lockTimestamp = 1654945381;

    const secondsToDhms = (seconds) => {
        seconds = Number(seconds);
        var d = Math.floor(seconds / (3600*24));
        var h = Math.floor(seconds % (3600*24) / 3600);
        var m = Math.floor(seconds % 3600 / 60);
        var s = Math.floor(seconds % 60);

        var dDisplay = d > 0 ? d + (d == 1 ? " day, " : " days, ") : "";
        var hDisplay = h > 0 ? h + (h == 1 ? " hour, " : " hours, ") : "";
        var mDisplay = m > 0 ? m + (m == 1 ? " minute, " : " minutes, ") : "";
        var sDisplay = s > 0 ? s + (s == 1 ? " second" : " seconds") : "";
        return dDisplay + hDisplay + mDisplay + sDisplay;
    }


    console.log(new Date(lockTimestamp*1000));

    secondsToDhms(1654945381)

  return (
    <div className="col-xl-6">
        <div className="token">
            
            <div className="wapper">
                <div className="token-title">
                    Unlock countdown
                </div>

                <div className="token-total">
                    90000000
                </div>
            </div>

            <div className="token-process">
                <ProgressBar now={percent} />
            </div>

            <div className="token-date">
                19 Days, 21 hours, 25 Minutes, 45 seconds
            </div>

            <div className="token-view">
                VIEW
            </div>
        </div>
    </div>
  )
}
