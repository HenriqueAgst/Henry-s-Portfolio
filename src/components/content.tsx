import minhaFoto from "../assets/me.jpeg";

export const Content = () => {
  return (
    <main className="bg-gray-950 h-[100vh] text-white flex items-center justify-around">
      <div>
        <p className="max-w-xl mb-10">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
          exercitationem, voluptatem adipisci vitae officia nulla consectetur
          earum dolorum suscipit, cumque quasi odio! Dolores esse dolor
          laboriosam ipsum architecto. Nam, laudantium.
        </p>

        <button>Entre em contato</button>
      </div>
      <img src={minhaFoto} alt="foto minha" className="h-140 rounded-lg m-5" />
    </main>
  );
};
