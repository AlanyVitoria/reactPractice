export default function Portfolio() {
  return (
    <main>
        <h1 className="titulo">Meus Projetos</h1>
        <section className="projetos">
            <section className="CInExt">
            <h2>CInExt</h2>
            <p><strong>Disciplina:</strong> Concepção de Artefatos Digitais</p>
            <p>O CInExt tem o objetivo de ser um ponto de encontro entre pessoas que buscam ações de extensão para participar, criar ou co-criar e docentes estejam em buca de novas ideias ou em busca de alunas para ideias já existentes, além de facilitar suas escolhas na seleção.</p>

            <h3>Protótipo</h3>
            <a href="https://cinext.lovable.app/auth">Link de direcionamento</a>
            </section>

            <section className="LIACLI">
            <h2>LIACLI</h2>
            <p><strong>Disciplina:</strong> Desenvolvimento de Software</p>
            <p>O LIACLI centraliza todo o ciclo de análise laboratorial, da solicitação ao laudo, garantindo rastreabilidade, redução de erros e comunicação fluida entre pesquisadores e equipe técnica.</p>

            <h3>Protótipo</h3>
            <a href="https://claude.ai/public/artifacts/72acc92a-4cc4-4b1a-aed4-911c2ba1d231">Link de direcionamento</a>
            </section>
        </section>
    </main>
  );
}