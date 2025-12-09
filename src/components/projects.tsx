import project from "../assets/to-do-list.png";
import project2 from "../assets/formJs.png";
import project3 from "../assets/calc churras.png";

export const Projects = () => {
  return (
    <section className="w-full py-20 bg-gray-950 text-white">
      <div className="text-center mb-16">
        <span className="text-teal-400 tracking-widest text-sm font-semibold">
          PORTFÓLIO
        </span>

        <h2 className="text-4xl font-bold mt-2">
          Projetos <span className="text-teal-400">Recentes</span>
        </h2>

        <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
          Confira alguns dos projetos que desenvolvi, cada um com atenção aos
          detalhes e foco em resultados.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-6 lg:px-20">
        <div className="bg-gray-900 rounded-xl border border-gray-800 overflow-hidden flex flex-col">
          <img
            src={project}
            alt="Projeto 1"
            className="w-full h-56 object-cover"
          />

          <div className="p-6 flex flex-col justify-between h-full">
            <h3 className="text-xl font-semibold mb-2">To-do List</h3>
            <p className="text-gray-400 mb-6">
              Uma aplicação de lista de tarefas desenvolvida com React,
              TypeScript e Tailwind CSS, focada em produtividade e simplicidade.
              Permite adicionar, marcar como concluída e remover tarefas de
              forma dinâmica, com uma interface moderna, responsiva e agradável.
            </p>

            <button className="w-full border border-teal-500 py-2 rounded-lg hover:bg-gray-800 transition">
              Ver Projeto
            </button>
          </div>
        </div>

        <div className="bg-gray-900 rounded-xl border border-gray-800 overflow-hidden flex flex-col">
          <img
            src={project2}
            alt="Projeto 2"
            className="w-full h-56 object-cover"
          />

          <div className="p-6 flex flex-col justify-between h-full">
            <h3 className="text-xl font-semibold mb-2">
              Formulário Interativo
            </h3>
            <p className="text-gray-400 mb-6">
              Formulário interativo desenvolvido utilizando HTML, CSS e
              JavaScript puro, criado com foco em estudos e prática de
              manipulação do DOM e validações nativas.
            </p>

            <button className="w-full border border-teal-500 py-2 rounded-lg hover:bg-gray-800 transition">
              Ver Projeto
            </button>
          </div>
        </div>

        <div className="bg-gray-900 rounded-xl border border-gray-800 overflow-hidden flex flex-col">
          <img
            src={project3}
            alt="Projeto 3"
            className="w-full h-56 object-cover"
          />

          <div className="p-6 flex flex-col justify-between h-full">
            <h3 className="text-xl font-semibold mb-2">
              Calculadora de churrasco
            </h3>
            <p className="text-gray-400 mb-6">
              Este projeto é uma Calculadora de Churrasco desenvolvida com HTML,
              CSS e JavaScript, criada para um trabalho da faculdade com foco
              total em estudos. A aplicação permite informar a quantidade de
              homens, mulheres e crianças que estarão presentes no evento e, a
              partir desses dados, calcula automaticamente a quantidade ideal de
              carnes e bebidas necessárias para o churrasco.
            </p>

            <button className="w-full border border-teal-500 py-2 rounded-lg hover:bg-gray-800 transition">
              Ver Projeto
            </button>
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-14">
        <button className="bg-teal-500 text-black font-semibold px-8 py-3 rounded-lg hover:bg-teal-400 transition">
          Ver Todos os Projetos
        </button>
      </div>
    </section>
  );
};
