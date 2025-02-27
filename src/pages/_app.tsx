import '../styles/global.css';

import type { AppProps } from 'next/app';
import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useState } from 'react';

import CheckoutContext from '@/components/CheckoutContext';
import calcTime from '@/utils/calc-time';

import HeroBgImg from '../../public/assets/images/hero.jpeg';

const App = ({ Component, pageProps }: AppProps) => {
  const [checkout, setCheckout] = useState<ShopifyBuy.Cart | null>(null);
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Gadha</title>
      </Head>
      <CheckoutContext.Provider value={{ checkout, setCheckout }}>
        <section className="grid h-screen place-items-center bg-amber-50">
          {/* Header */}
          <div className="z-10 mx-auto flex-col items-center">
            <div className="flex flex-col">
              <div
                className="mx-auto mb-2 max-w-[200px] cursor-pointer select-none border-b-4 border-stone-400 text-center"
                onClick={() => router.push('/')}
              >
                <h1 className="text-3xl font-bold uppercase italic">
                  Gadha&#8482;
                </h1>
                <h3 className="-mt-2 mb-1 text-xs font-light lowercase tracking-tighter">
                  not modern enough
                </h3>
              </div>
              {/* Content */}
              <Component {...pageProps} />
            </div>
            <p className="mt-1 text-center font-mono text-sm font-semibold lowercase tracking-wider">
              Chicago | {calcTime(-5)}
            </p>
          </div>
          {/* Background image */}
          <div className="absolute h-screen w-full">
            <Image
              className="opacity-[15%] grayscale"
              src={HeroBgImg}
              alt="hero"
              layout="fill"
              objectFit="cover"
              objectPosition="center"
              draggable={false}
              priority
            />
          </div>
        </section>
      </CheckoutContext.Provider>
    </>
  );
};

export default App;
