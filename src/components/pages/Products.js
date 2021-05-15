import React from 'react';
import '../../App.css';
import Footer from '../Footer';
import './Products.css';

export default function Products() {
  return (
  <div>
  <h1 className='products'
   style={{backgroundImage:'url(/images/img-1.jpg)',
            backgroundPosition:' center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            color: 'white',

            display: 'flex',
            height: '90vh',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '3rem'
            
   
   }}>PRODUCTS</h1>

   < Footer />

    

  </div>
  );
}
