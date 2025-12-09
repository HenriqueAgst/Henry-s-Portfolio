export const Header = () => {
  return (
    <header className="flex items-center justify-between p-4 bg-gray-900 text-white absolute w-full">
      <h1 className="text-xl ml-6">
        Henry's <span className="text-teal-400">Portfolio</span>
      </h1>
      <ul className="text-xl">
        <li className="flex gap-12 mr-8">
          <a
            className="hover:text-teal-500 transition-colors duration-300"
            href="#about"
          >
            About
          </a>
          <a
            className="hover:text-teal-500 transition-colors duration-300"
            href="#projects"
          >
            Project's
          </a>
          <a
            className="hover:text-teal-500 transition-colors duration-300"
            href="#contact"
          >
            Contact-me
          </a>
        </li>
      </ul>
    </header>
  );
};
