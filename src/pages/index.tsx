import type { NextPage } from "next";
import Starter from "@components/Starter";

const Home: NextPage = () => {
  return (
    <div className='flex flex-col justify-center items-center min-h-screen font-primary'>
      {/* Delete the Starter Component and remove <Starter /> to get started! */}
      <Starter />
    </div>
  );
};

export default Home;
