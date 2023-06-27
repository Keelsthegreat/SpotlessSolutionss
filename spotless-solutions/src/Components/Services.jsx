import React from 'react'

function Services() {
  return (
    <div>
        <h1 className='divTxt'>Our Services</h1>
        <h3 className='divTxt'>See our cleaning services below!</h3>

        <div>

        <img className='servicePic' src='https://cdn.discordapp.com/attachments/692019678482006016/1123066839317106806/pexels-karolina-grabowska-4239035.jpg' alt=''/>
        <h3 className='divTxt'>Standard Cleaning</h3>
        </div>
        
        <div>
        <img className='servicePic' src='https://cdn.discordapp.com/attachments/692019678482006016/1123066638615453797/pexels-matilda-wormwood-4098761.jpg' alt=''/>
        <h3 className='divTxt'>Deep Cleaning</h3>
        <h4 className='divTxt'>The deep clean for busy homeowners who want their to-do list empty & house spotless. <a href=''>See what's included</a></h4>
        </div>

        <div>
        <img className='servicePic' src='https://cdn.discordapp.com/attachments/692019678482006016/1123092389406449756/pexels-mister-mister-3434533.jpg' alt=''/>
        <h3 className='divTxt'>Moving In/Moving Out Cleaning</h3>
        <h4 className='divTxt'>The move-in/move-out cleaning will have your new or old home spotless and ready for moving day.</h4>
        </div>
        <button>Book Online</button>

    </div>
  )
}

export default Services