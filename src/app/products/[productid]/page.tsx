import React from 'react';

interface ProductPageProps {
  params : {
    productid : Promise<string>;
  }
};


const Page = async ({params} : ProductPageProps) => {

  const productid = await params.productid;

  return (


    <div className='flex flex-col items-center justify-center mt-[10%]'>
           <h1 className='underline underline-offset-[5px] font-semibold text-[18px]'> Detailes about product : </h1> 

          <h1 className='mt-[1%]'> id : {productid}; </h1>  
           <p> Price : 2000/- </p> 
           <p className='font-bold'> Made in India </p> 
    </div>
  )
}

export default Page;