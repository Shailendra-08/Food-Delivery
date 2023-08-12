import React from 'react'

export default function Card({name,des,img,option}) {

    // let option = props.option;
    let priceoption = Object.keys(option);

    const handleaddtocart =()=>{
        
    }

    return (
        <div>

            <div>

                <div className="card mt-3" style={{ "width": "18rem","max-height":"360px" }}>
                    <img src={img} className="card-img-top" alt="..." style={{height:"120px",objectFit:'fill' }} />
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        {/* <p className="card-text">{des}</p> */}
                        <div className='container w-100'>
                            <select className='m-2 h-100  bg-success rounded'>

                                {
                                    Array.from(Array(6), (e, i) => {
                                        return (
                                            <option key={i + 1} value={i + 1}>{i + 1}</option>
                                        )
                                    })
                                }
                            </select>


                            <select className='m-2 h-100  bg-success rounded'>
                                {priceoption.map((data)=>{
                                    return <option key={data} value={data}>{data}</option>
                                })}
                            </select>

                            <div className='d-inline h-100 fs-5'>Total Price</div>
                        </div>

                        <hr />

                        <button className={'btn btn-success justify-center ms-2'} onClick={handleaddtocart}>Add to cart</button>
                    </div>
                </div>

            </div>

        </div>




    //     <div className="d-grid" style={{ width: '18rem' }}>
    //   <div className="card mt-3" style={{ height: '100%',objectFit:'fill' }}>
    //     <img src={img} className="card-img-top" alt="..." />
    //     <div className="card-body">
    //       <h5 className="card-title">{name}</h5>
    //       {/* <p className="card-text">{des}</p> */}
    //       <div className="container w-100">
    //         <select className="m-2 h-100 bg-success rounded">
    //           {Array.from(Array(6), (e, i) => (
    //             <option key={i + 1} value={i + 1}>
    //               {i + 1}
    //             </option>
    //           ))}
    //         </select>
    //         <select className="m-2 h-100 bg-success rounded">
    //           {priceoption.map((data) => (
    //             <option key={data} value={data}>
    //               {data}
    //             </option>
    //           ))}
    //         </select>
    //         <div className="d-inline h-100 fs-5">Total Price</div>
    //       </div>
    //     </div>
    //   </div>
    // </div>



    )
}
