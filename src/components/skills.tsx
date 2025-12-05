export const Skills = () => {
  return (
    <section className="py-20 bg-gray-900 p-7">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="bg-gray-900 border border-gray-700 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
          <div className="bg-blue-600 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
            <h3 className="text-xl font-semibold">HTML</h3>
          </div>
          <p className="text-gray-300">
            Estruturação profissional de páginas web.
          </p>
        </div>

        <div className="bg-gray-900 border border-gray-700 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
          <div className="bg-blue-600 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
            <h3 className="text-xl font-semibold">CSS</h3>
          </div>
          <p className="text-gray-300">Estilização moderna e responsiva.</p>
        </div>

        <div className="bg-gray-900 border border-gray-700 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
          <div className="bg-blue-600 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
            <h3 className="text-xl font-semibold">JavaScript</h3>
          </div>
          <p className="text-gray-300">
            Lógica, interação e funcionalidades avançadas.
          </p>
        </div>

        <div className="bg-gray-900 border border-gray-700 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
          <div className="bg-blue-600 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
            <h3 className="text-xl font-semibold">React</h3>
          </div>
          <p className="text-gray-300">
            Criação de interfaces modernas e dinâmicas.
          </p>
        </div>
      </div>
    </section>
  );
};
