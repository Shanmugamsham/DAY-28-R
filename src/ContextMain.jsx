import { useState,createContext } from 'react';
import React from 'react';
import './App.css'
import Card_1 from './Card_1';

export const Usenewcontext=createContext({})

const ContextMain = () => {

const [maindata,setmaindata]=useState({title: "Iphone",brand:"apple",image: "https://res.cloudinary.com/ddjjx7t57/image/upload/v1709270139/53172881544_89e3385c12_b_annm4x.jpg",price:250,})

 

//  fetch(" http://localhost:5173/product.json").then((d)=>d.json()).then((dd)=>{
   
//  let obj=(dd.products[0])    
// })
console.log(maindata)

    return (
        <div>
            <Usenewcontext.Provider value={maindata}>
               <Card_1/>

            </Usenewcontext.Provider>
            
        </div>
    );
};

export default ContextMain;