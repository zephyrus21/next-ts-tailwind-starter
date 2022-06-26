import type { NextPage } from "next";
import Starter from "@components/Starter";

const Home: NextPage = () => {
  return (
    <div className='flex flex-col justify-center items-center min-h-screen font-primary'>
      <Starter />
    </div>
  );
};

export default Home;
