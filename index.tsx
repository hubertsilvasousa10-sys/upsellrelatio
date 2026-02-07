import React from 'react';
import { createRoot } from 'react-dom/client';
import { ArrowRight, CheckCircle2, Heart, ShieldCheck, Zap, AlertCircle } from 'lucide-react';

const App: React.FC = () => {
  const checkoutUrl = "https://www.ggcheckout.com/checkout/v2/j3rRufiu1XYgjmFKgqPv";

  return (
    <div className="min-h-screen flex flex-col items-center bg-[#fafafa]">
      
      {/* Barra de Notificação Superior */}
      <div className="w-full bg-red-600 text-white py-3 px-4 text-center shadow-md animate-pulse">
        <p className="text-sm md:text-base font-medium flex items-center justify-center gap-2">
          <AlertCircle className="w-4 h-4 md:w-5 h-5" />
          Sua compra foi confirmada! Obrigado pela confiança. Veja esta oportunidade única e exclusiva abaixo.
        </p>
      </div>

      <main className="max-w-3xl w-full flex flex-col space-y-16 py-12 px-6 md:py-20">
        
        {/* Headline Principal */}
        <section className="text-center space-y-6">
          <h1 className="serif text-4xl md:text-5xl lg:text-6xl text-gray-900 leading-tight">
            Pare de carregar o peso do silêncio no peito.
          </h1>
          
          <div className="space-y-12">
            <p className="text-xl md:text-2xl text-gray-600 font-light leading-relaxed max-w-2xl mx-auto">
              Não é sobre esquecer quem partiu, mas sobre <span className="text-gray-900 font-medium">silenciar a dor emocional</span> que impede você de respirar em paz.
            </p>

            {/* VSL Video */}
            <div className="w-full max-w-4xl mx-auto">
              <div className="rounded-xl shadow-2xl overflow-hidden border-4 border-white bg-black">
                {/* @ts-ignore */}
                <wistia-player media-id="bdbsusffp7" aspect="1.7777777777777777"></wistia-player>
              </div>
            </div>
          </div>
        </section>

        {/* Argumentação */}
        <section className="bg-white border border-gray-100 p-8 md:p-12 rounded-2xl shadow-sm max-w-2xl mx-auto w-full">
          <h2 className="text-sm uppercase tracking-widest text-gray-400 font-semibold mb-8">
            Você reconhece essa sensação?
          </h2>
          <ul className="space-y-6">
            <li className="flex items-start gap-4">
              <div className="mt-1"><Heart className="w-5 h-5 text-gray-400" /></div>
              <p className="text-lg text-gray-700 leading-snug">
                Aquela sensação de peso constante no centro do peito, como se faltasse ar.
              </p>
            </li>
            <li className="flex items-start gap-4">
              <div className="mt-1"><Zap className="w-5 h-5 text-gray-400" /></div>
              <p className="text-lg text-gray-700 leading-snug">
                Uma ansiedade que te acorda cedo e te persegue durante todo o dia.
              </p>
            </li>
            <li className="flex items-start gap-4">
              <div className="mt-1"><ArrowRight className="w-5 h-5 text-gray-400" /></div>
              <p className="text-lg text-gray-700 leading-snug">
                A espera involuntária por uma notificação no celular que nunca chega.
              </p>
            </li>
            <li className="flex items-start gap-4">
              <div className="mt-1"><ShieldCheck className="w-5 h-5 text-gray-400" /></div>
              <p className="text-lg text-gray-700 leading-snug">
                Pensamentos constantes que revisitam conversas e momentos sem parar.
              </p>
            </li>
          </ul>
        </section>

        {/* Produto */}
        <section className="space-y-12 max-w-2xl mx-auto w-full">
          <div className="text-center space-y-4">
            <h2 className="serif text-3xl text-gray-900">O Protocolo de 7 Dias</h2>
            <p className="text-lg text-gray-600 font-light">
              O programa <strong>"7 Dias Para Silenciar a Dor do Afastamento"</strong> é um método silencioso e terapêutico focado em acalmar seu sistema límbico.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-6 bg-gray-50 rounded-xl">
              <h3 className="font-semibold text-gray-900 mb-2">Orientações Diárias</h3>
              <p className="text-gray-600">Cada dia traz um passo prático e simples para desarmar os gatilhos emocionais da ausência.</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-xl">
              <h3 className="font-semibold text-gray-900 mb-2">Foco no Alívio</h3>
              <p className="text-gray-600">Reduzimos a intensidade da dor de forma progressiva, sem exigir mudanças drásticas na sua rotina.</p>
            </div>
          </div>
        </section>

        {/* Audiência */}
        <section className="border-t border-gray-200 pt-16 max-w-2xl mx-auto w-full">
          <h2 className="serif text-3xl text-gray-900 text-center mb-10">Este método é para você se:</h2>
          <div className="space-y-4">
            {[
              "Está aplicando o Contato Zero mas se sente ansiosa(o).",
              "Foi afastado(a) e não sabe como lidar com o vazio súbito.",
              "Não consegue desligar emocionalmente, mesmo sabendo que deve.",
              "Precisa de paz imediata para conseguir trabalhar e viver."
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-4 p-4 border border-gray-100 rounded-lg bg-white">
                <CheckCircle2 className="w-6 h-6 text-emerald-500 flex-shrink-0" />
                <span className="text-gray-700">{item}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Garantia */}
        <section className="text-center space-y-6 px-4 max-w-2xl mx-auto w-full">
          <div className="inline-flex items-center justify-center p-3 bg-gray-100 rounded-full mb-2">
            <ShieldCheck className="w-6 h-6 text-gray-600" />
          </div>
          <h2 className="serif text-2xl text-gray-900">Nossa Garantia de Paz</h2>
          <p className="text-gray-600 italic">
            "Este guia não existe para forçar reconciliações ou decisões impulsivas. Nosso único objetivo é retirar a faca do peito para que você possa pensar com clareza novamente."
          </p>
        </section>

        {/* CTA */}
        <section className="flex flex-col items-center space-y-4 pb-12 max-w-2xl mx-auto w-full text-center">
          <a 
            href={checkoutUrl}
            className="w-full md:w-auto px-12 py-5 bg-gray-900 text-white text-xl font-medium rounded-full hover:bg-black transition-all transform hover:scale-105 active:scale-95 shadow-xl shadow-gray-200 inline-block no-underline"
          >
            Quero silenciar essa dor agora
          </a>
          <p className="text-sm text-gray-400 font-light flex items-center gap-2">
            Acesso imediato e 100% discreto.
          </p>
        </section>

      </main>

      <footer className="mt-auto py-12 text-gray-400 text-xs text-center border-t border-gray-100 w-full max-w-2xl px-6">
        <p>&copy; 2024 Protocolo Silenciar. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
};

const rootElement = document.getElementById('root');
if (rootElement) {
  createRoot(rootElement).render(<App />);
}