import React from 'react'
import Navbar from '../components/Navbar'
import Footers from '../components/Footers'
import Card from '../components/Card'
import Crausal from '../components/Crausal'

export default function Home() {
    return (
        <div>
            <div>  <Navbar />  </div>

            <div> <Crausal/> </div>
            <div className='m-4'> <Card/> </div>
            <div> <Footers /> </div>


        </div>
    )
}
