import minhaFoto from "../assets/me.jpeg";

export const Content = () => {
  return (
    <main className="bg-gray-950 h-[100vh] text-white text-2xl flex items-center justify-around">
      <div>
        <p className="max-w-xl mb-10 text-center p-2 m-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
          exercitationem, voluptatem adipisci vitae officia nulla consectetur
          earum dolorum suscipit, cumque quasi odio! Dolores esse dolor
          laboriosam ipsum architecto. Nam, laudantium.
        </p>

        {/* <button className="bg-sky-700 cursor-pointer p-2 ml-8 rounded-lg hover:bg-sky-500 transition-colors duration-300">
          Entre em contato
        </button> */}
      </div>
      <img src={minhaFoto} alt="foto minha" className="h-140 rounded-lg m-5" />
    </main>
  );
};
