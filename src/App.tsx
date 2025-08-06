import React from 'react';
import { BookOpen, Trophy, Users, Clock, CheckCircle, Star, ArrowRight, Play, Award, Target, Zap } from 'lucide-react';

function App() {
  const handleAffiliateClick = () => {
    window.open('https://afiliados.grancursosonline.com.br/idevaffiliate.php?id=2557_39', '_blank');
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-red-600 via-red-700 to-blue-800 text-white">
        <div className="container mx-auto px-6 py-16">
          {/* Logo */}
          <div className="flex justify-center mb-8">
            <img 
              src="https://cloudfront.grancursosonline.com.br/assets/site/img/logo/gran-logo.svg" 
              alt="Gran Cursos Online" 
              className="h-16 md:h-20"
            />
          </div>
          
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Conquiste sua <span className="text-yellow-300">Aprovação</span> nos Concursos Públicos
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
              Mais de 1 milhão de alunos já conquistaram seus sonhos com a Gran Cursos. 
              Metodologia comprovada há mais de 15 anos no mercado!
            </p>
            <button 
              onClick={handleAffiliateClick}
              className="bg-yellow-400 hover:bg-yellow-300 text-red-700 font-bold text-lg px-12 py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-yellow-400/25 inline-flex items-center gap-3"
            >
              Começar Agora - Acesso Especial
              <ArrowRight className="w-6 h-6" />
            </button>
            <div className="mt-8 flex flex-wrap justify-center gap-8 text-sm text-blue-200">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-yellow-300" />
                <span>Acesso Imediato</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-yellow-300" />
                <span>Garantia de Satisfação</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-yellow-300" />
                <span>Suporte Especializado</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="bg-white rounded-lg p-6 shadow-lg border-t-4 border-red-600">
              <div className="text-3xl font-bold text-red-600 mb-2">1M+</div>
              <div className="text-gray-600 font-medium">Alunos Aprovados</div>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-lg border-t-4 border-blue-600">
              <div className="text-3xl font-bold text-blue-600 mb-2">15+</div>
              <div className="text-gray-600 font-medium">Anos de Tradição</div>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-lg border-t-4 border-red-600">
              <div className="text-3xl font-bold text-red-600 mb-2">300+</div>
              <div className="text-gray-600 font-medium">Professores Especialistas</div>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-lg border-t-4 border-blue-600">
              <div className="text-3xl font-bold text-blue-600 mb-2">5000+</div>
              <div className="text-gray-600 font-medium">Videoaulas Disponíveis</div>
            </div>
          </div>
        </div>
      </section>

      {/* Principais Concursos */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Principais Concursos Preparatórios
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Cursos específicos para os concursos mais concorridos do Brasil
            </p>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-12">
            {[
              'Polícia Federal', 'Polícia Civil', 'Polícia Militar', 'Bombeiros',
              'Receita Federal', 'INSS', 'Banco do Brasil', 'Caixa Econômica',
              'TRT', 'TST', 'STF', 'STJ',
              'Prefeituras', 'Câmaras Municipais', 'DETRAN', 'PCDF'
            ].map((concurso, index) => (
              <div key={index} className="bg-gradient-to-r from-red-50 to-blue-50 rounded-lg p-4 text-center border border-red-100 hover:shadow-lg transition-all duration-300">
                <div className="font-semibold text-gray-800">{concurso}</div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <button 
              onClick={handleAffiliateClick}
              className="bg-red-600 hover:bg-red-700 text-white font-bold text-lg px-10 py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg inline-flex items-center gap-3"
            >
              Ver Todos os Cursos
              <ArrowRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </section>

      {/* Diferenciais */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Por que a Gran Cursos é Líder no Mercado?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Metodologia exclusiva desenvolvida por especialistas em concursos públicos
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white rounded-lg p-8 shadow-lg text-center hover:shadow-xl transition-all duration-300">
              <div className="bg-red-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <Trophy className="w-10 h-10 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Professores Renomados</h3>
              <p className="text-gray-600">
                Equipe com mais de 300 professores especialistas, todos com vasta experiência em bancas organizadoras
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-lg text-center hover:shadow-xl transition-all duration-300">
              <div className="bg-blue-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <Play className="w-10 h-10 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Videoaulas HD</h3>
              <p className="text-gray-600">
                Mais de 5.000 videoaulas em alta definição, com didática exclusiva e foco na aprovação
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-lg text-center hover:shadow-xl transition-all duration-300">
              <div className="bg-red-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <Target className="w-10 h-10 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Questões Comentadas</h3>
              <p className="text-gray-600">
                Milhares de questões comentadas das principais bancas organizadoras do país
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-lg text-center hover:shadow-xl transition-all duration-300">
              <div className="bg-blue-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <BookOpen className="w-10 h-10 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Material Completo</h3>
              <p className="text-gray-600">
                PDFs atualizados, resumos, mapas mentais e material de apoio exclusivo
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-lg text-center hover:shadow-xl transition-all duration-300">
              <div className="bg-red-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <Zap className="w-10 h-10 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Simulados</h3>
              <p className="text-gray-600">
                Simulados online com correção automática e relatório de desempenho detalhado
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-lg text-center hover:shadow-xl transition-all duration-300">
              <div className="bg-blue-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <Users className="w-10 h-10 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Comunidade Ativa</h3>
              <p className="text-gray-600">
                Fóruns de discussão, grupos de estudo e networking com outros concurseiros
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Histórias Reais de Aprovação
            </h2>
            <p className="text-xl text-gray-600">
              Veja o que nossos alunos aprovados têm a dizer
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-gradient-to-br from-red-50 to-white rounded-lg p-8 shadow-lg border-l-4 border-red-600">
              <div className="flex mb-4">
                {[1,2,3,4,5].map(i => (
                  <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 italic">
                "Depois de 3 anos tentando, finalmente consegui minha aprovação no TRT-SP. A metodologia da Gran Cursos e a qualidade dos professores fizeram toda a diferença no meu resultado!"
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                  M
                </div>
                <div>
                  <div className="font-semibold text-gray-800">Marina Santos</div>
                  <div className="text-sm text-gray-500">Aprovada TRT-SP - Analista Judiciário</div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-white rounded-lg p-8 shadow-lg border-l-4 border-blue-600">
              <div className="flex mb-4">
                {[1,2,3,4,5].map(i => (
                  <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 italic">
                "Conteúdo completo, professores incríveis e suporte excepcional. A Gran Cursos me deu toda a base necessária para conquistar minha vaga na Polícia Civil."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                  C
                </div>
                <div>
                  <div className="font-semibold text-gray-800">Carlos Mendes</div>
                  <div className="text-sm text-gray-500">Aprovado Polícia Civil-RJ - Investigador</div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-red-50 to-white rounded-lg p-8 shadow-lg border-l-4 border-red-600">
              <div className="flex mb-4">
                {[1,2,3,4,5].map(i => (
                  <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 italic">
                "A metodologia da Gran me ajudou a organizar os estudos e focar no que realmente cai na prova. Hoje sou servidora federal graças a essa preparação!"
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                  A
                </div>
                <div>
                  <div className="font-semibold text-gray-800">Ana Paula</div>
                  <div className="text-sm text-gray-500">Aprovada Receita Federal - Auditora</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Urgência e Escassez */}
      <section className="py-16 bg-gradient-to-r from-red-600 via-red-700 to-blue-800 text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-yellow-400 text-red-800 font-bold py-2 px-6 rounded-full inline-block mb-6">
              🔥 OFERTA ESPECIAL POR TEMPO LIMITADO
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Não Perca Mais Nenhum Concurso!
            </h2>
            
            <p className="text-xl mb-8 text-blue-100 max-w-3xl mx-auto">
              Milhares de vagas sendo abertas todos os meses. Enquanto você hesita, 
              outros estão se preparando e conquistando a estabilidade que você merece.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-10">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <div className="text-2xl font-bold text-yellow-300 mb-2">Acesso Vitalício</div>
                <div className="text-blue-100">Estude no seu ritmo, sem pressa</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <div className="text-2xl font-bold text-yellow-300 mb-2">Suporte Total</div>
                <div className="text-blue-100">Tire dúvidas com especialistas</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <div className="text-2xl font-bold text-yellow-300 mb-2">Garantia</div>
                <div className="text-blue-100">Satisfação garantida ou seu dinheiro de volta</div>
              </div>
            </div>

            <button 
              onClick={handleAffiliateClick}
              className="bg-yellow-400 hover:bg-yellow-300 text-red-700 font-bold text-2xl px-16 py-6 rounded-full transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-yellow-400/25 inline-flex items-center gap-4 mb-6"
            >
              GARANTIR MINHA APROVAÇÃO AGORA
              <ArrowRight className="w-8 h-8" />
            </button>

            <div className="text-sm text-blue-200 space-y-2">
              <div>✅ Acesso imediato após a confirmação do pagamento</div>
              <div>✅ Mais de 1 milhão de alunos já aprovados</div>
              <div>✅ 15 anos de tradição e excelência no ensino</div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Perguntas Frequentes
            </h2>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <h3 className="text-xl font-bold text-gray-800 mb-3">Como funciona o acesso aos cursos?</h3>
              <p className="text-gray-600">
                Após a confirmação do pagamento, você recebe acesso imediato à plataforma com todas as videoaulas, 
                materiais em PDF, questões comentadas e simulados.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-lg">
              <h3 className="text-xl font-bold text-gray-800 mb-3">Por quanto tempo tenho acesso ao conteúdo?</h3>
              <p className="text-gray-600">
                O acesso é vitalício! Você pode estudar no seu ritmo, revisar quantas vezes quiser e 
                acompanhar as atualizações do conteúdo sem custo adicional.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-lg">
              <h3 className="text-xl font-bold text-gray-800 mb-3">Existe garantia de aprovação?</h3>
              <p className="text-gray-600">
                Oferecemos garantia de satisfação. Se não ficar satisfeito com o curso, 
                devolvemos seu dinheiro dentro do prazo estabelecido.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="text-center mb-8">
            <img 
              src="https://cloudfront.grancursosonline.com.br/assets/site/img/logo/gran-logo.svg" 
              alt="Gran Cursos Online" 
              className="h-12 mx-auto mb-4 opacity-80"
            />
            <p className="text-gray-400 max-w-2xl mx-auto">
              Há mais de 15 anos transformando sonhos em aprovações. 
              A Gran Cursos é referência nacional em preparação para concursos públicos.
            </p>
          </div>
          
          <div className="text-center">
            <button 
              onClick={handleAffiliateClick}
              className="bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-3 rounded-full transition-all duration-300 inline-flex items-center gap-2 mb-6"
            >
              Começar Minha Preparação
              <ArrowRight className="w-5 h-5" />
            </button>
            
            <p className="text-gray-500 text-sm">
              © 2024 Gran Cursos Online. Mais de 1 milhão de alunos aprovados desde 2008.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;