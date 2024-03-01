import React from 'react';
import { useState,useContext } from 'react';
import { Usenewcontext } from './ContextMain';

const Card_1 = () => {

    const {title,brand,image,price}=useContext(Usenewcontext)
    
    const [finaldata,setfinaldata]=useState({names:title,brands:brand,images:image,prices:price})
    function runcode(e){
        const pricename=e.target.name
        const value=e.target.value
        const newprice=price*value
        setfinaldata({...finaldata,[pricename]:newprice})
    }

 
    return (
        <div className='bg-image'>
            <div className='container'>
                <div className='row'>
                  <div className='col-12'>
                    <h1 className='heading'>CONTEXTAPI NEW CARD</h1>

                  </div>

                    <div className='col-6'>
                      <img src={finaldata.images} className='imgsizing'/>

                    </div>
                    <div className='col-3 sele'>
                        <select onChange={runcode} name='prices'>
                            <option value={1}>1</option>
                            <option value={2}>2</option>
                            <option value={3}>3</option>
                            <option value={4}>4</option>
                            <option value={5}>5</option>
                            <option value={6}>6</option>
                            <option value={7}>7</option>
                            <option value={8}>8</option>
                            <option value={9}>9</option>
                            <option value={10}>10</option>
                            
                        </select>
                        

                    </div>

                    <div className='col-3'>
                        <p>${finaldata.prices}</p>
                        <div className='rightsize'>
                        <button className='remove'>Remove</button>
                        </div>
                    </div>
                    <div className='col-12'>
                        <hr className='mt-5'></hr>

                    </div>
                    <div className='col-6'>
                        <p className='subtitle'>SUNTOTAL;</p>

                    </div>
                    <div className='col-6'>
                       <p className='free'>${finaldata.prices}</p>

                    </div>
                    <div className='col-6'>
                        <p className='subtitle'>SHIPPING:</p>

                    </div>
                    <div className='col-6'>
                        <p className='free'>FREE</p>

                    </div>
                    <div className='col-12'>
                        <hr className='mt-5'></hr>

                    </div>

                    <div className='col-6'>
                        <p  className='free1'>TOTAL:</p>

                    </div>
                    <div className='col-6'>
                        <p className='free'>${finaldata.prices}</p>
                        <p className='free3'>Get Daily Cash With Nespola Card</p>

                    </div>
                     

                    

                </div>

            </div>
            
        </div>
    );
};

export default Card_1;