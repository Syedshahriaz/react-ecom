import Image from 'next/image';
import Banner from '@/components/Banner';
import Products from '@/components/Products';
import { ProductProps } from '../../type';

interface Props{
  productData: ProductProps;
}

export default function Home({ productData }: Props) {
  //console.log( productData );
  return (
    <main>
        <div className='max-w-screen mx-auto'>
          <Banner/>
          <Products productData={productData}/>
        </div>
    </main>
  )
}

export const getServerSideProps = async() => {
  const res = await fetch("https://fakestoreapiserver.reactbd.com/tech");
  const productData = await res.json();
  return { props: { productData }}
}