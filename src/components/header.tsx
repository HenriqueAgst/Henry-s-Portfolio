export const Header = () => {
  return (
    <header className="flex items-center justify-between p-4 bg-gray-900 text-white absolute w-full">
      <h1>
        Henry's <span className="text-sky-300">Portfolio</span>
      </h1>
      <ul className="">
        <li className="flex gap-12 mr-8">
          <a href="#about">About</a>
          <a href="#projects">Project's</a>
          <a href="#contact">Contact-me</a>
        </li>
      </ul>
    </header>
  );
};
