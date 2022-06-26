import type { NextPage } from "next";

const Starter: NextPage = () => {
  const techs = [
    {
      name: "🔥Next.js 12",
      link: "https://nextjs.org/",
    },
    { name: "⚛️React.js 18", link: "https://reactjs.org/" },
    { name: "💎TypeScript", link: "https://www.typescriptlang.org/" },
    { name: "🍃Tailwind CSS 3", link: "https://tailwindcss.com/" },
  ];

  return (
    <div className='flex flex-col items-center text-center '>
      <div className='text-6xl mb-5'>⚡</div>
      <p className='text-4xl mb-4 font-semibold'>
        Next.js + TypeScript + Tailwind CSS Starter Template
      </p>
      <p className='text-gray-400 text-lg mb-3'>
        A minimal starter template for Next.js, TypeScript, and Tailwind CSS
      </p>
      <div className='font-medium flex'>
        {techs.map((tech) => (
          <a
            href={tech.link}
            key={tech.name}
            className='border-2 rounded-lg hover:bg-orange-100 cursor-pointer transition-all m-2 p-4'>
            {tech.name}
          </a>
        ))}
      </div>
      <footer className='absolute bottom-4'>
        Made with⚡|{" "}
        <a
          className='font-semibold cursor-pointer hover:text-orange-400 transition-all'
          href='https://piyushpandey.tech'>
          Piyush Pandey
        </a>
      </footer>
    </div>
  );
};

export default Starter;
