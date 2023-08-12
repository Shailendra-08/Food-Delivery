import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Footers from '../components/Footers'
import Card from '../components/Card'
import { json } from 'react-router-dom'

export default function Home() {
    const [search, setsearch] = useState("");


    const [pizza, setPizza] = useState([]);
    const [biryani, setBiryani] = useState([]);
    const [starter, setStarter] = useState([]);


    // const [foodCat, setcatItem] = useState([]);


    async function getItems() {
        await fetch('http://localhost:5000/food/getItems', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' }
        }).then(
            (data) => {
                return data.json();
            }
        ).then((d) => {
            setPizza(d.filter(item => item.CategoryName === "Pizza"));
            setBiryani(d.filter(item => item.CategoryName === "Biryani/Rice"));
            setStarter(d.filter(item => item.CategoryName === "Starter"));

        })
    }

    useEffect(() => {

        getItems();

    }, []);






      // Filter the items based on the search input
      const filteredPizza = pizza.filter(item => 
        item.name.toLowerCase().includes(search.toLowerCase()) ||
        item.description.toLowerCase().includes(search.toLowerCase())
    );

    const filteredBiryani = biryani.filter(item =>
        item.name.toLowerCase().includes(search.toLowerCase()) ||
        item.description.toLowerCase().includes(search.toLowerCase())
    );

    const filteredStarter = starter.filter(item =>
        item.name.toLowerCase().includes(search.toLowerCase()) ||
        item.description.toLowerCase().includes(search.toLowerCase())
    );


    return (
        <div>
            <div>  <Navbar />  </div>
            <div> <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel" style={{ objectFit: "contain" }}>
                <div className="carousel-inner" id='carousel'>

                    <div className='carousel-caption' style={{ zIndex: "10" }}>

                        <div className="d-flex justify-content-center">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"
                            value={search} onChange={(e)=>{
                                setsearch(e.target.value)
                            }} />
                            {/* <button className="btn btn-outline-success text-white bg-success " type="submit">Search</button> */}
                        </div>

                    </div>
                    <div className="carousel-item active">
                        <img src="https://source.unsplash.com/random/900×700/?burger" className="d-block w-100" style={{ filter: "brightness(30%)" }} alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="https://source.unsplash.com/random/900×700/?fries" className="d-block w-100" style={{ filter: "brightness(30%)" }} alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="https://source.unsplash.com/random/900×700/?pizza" className="d-block w-100" style={{ filter: "brightness(30%)" }} alt="..." />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div> </div>

            {/* <div className='container m-4 '>
                <h2>Pizza</h2>
                <hr />
                {
                    pizza.map(item => <Card key={item._id} name={item.name} img={item.img} desc={item.description} />)
                }
                <h2 className='mt-4'>Biryani</h2>
                <hr />
                {
                    biryani.map(item => <Card key={item._id} name={item.name} img={item.img} desc={item.description} />)
                }
                <h2 className='mt-4'>Starter</h2>
                <hr />

                {
                    starter.map(item => <Card key={item._id} name={item.name} img={item.img} desc={item.description} />)
                }

            </div> */}

            <div className='container'>
                <div>
                    <h2 className='mt-4'>Pizza</h2>
                    <hr />
                    <div className='d-flex gap-4 flex-wrap'>
                        {filteredPizza.map(item => (
                            <Card key={item._id} name={item.name} img={item.img} option={item.options[0]} des={item.description} />
                        ))}
                    </div>
                </div>

                <div>
                    <h2 className='mt-4'>Biryani</h2>
                    <hr />
                    <div className='d-flex gap-4 flex-wrap'>
                        {filteredBiryani.map(item => (
                            <Card key={item._id} name={item.name} img={item.img} option={item.options[0]} des={item.description} />
                        ))}
                    </div>
                </div>

                <div>
                    <h2 className='mt-4'>Starter</h2>
                    <hr />
                    <div className='d-flex  gap-4 flex-wrap'>
                        {filteredStarter.map(item => (
                            <Card key={item._id} name={item.name} img={item.img} option={item.options[0]} des={item.description} />
                        ))}
                    </div>
                </div>
            </div>


            <div> <Footers /> </div>


        </div>
    )
}
