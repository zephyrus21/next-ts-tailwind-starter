import type { NextPage } from "next";
import Starter from "@components/Starter";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <div className='flex flex-col justify-center items-center min-h-screen font-primary'>
      {/* Delete the Starter Component and remove <Starter /> to get started! */}
      <Head>
        <title>Next.js, TypeScript, Tailwind Starter Template</title>
      </Head>
      <Starter />
    </div>
  );
};

export default Home;
