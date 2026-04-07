
import fotoPerfil from './1000035081.jpg'
import './App.css'
function App() {
  return (
    <div>
      <header>
    <h1>Olá seja bem-vindo ao meu curriculo virtual</h1>
    <img src={fotoPerfil}></img>
    <h2>Alana Priscila</h2>
      </header>
      <main>

     <section>
      <h2>Objetivo: Desenvolvedora de sistemas</h2>
     </section>

        <section>
          <h1>dados para contato</h1>
          <h2>Alana Priscila</h2>
          <p>1 (240)712-2578</p>
          <p>E-mail: alanapriscila68@gmail.com</p>
        </section>
        <section>
          <h1>Formação</h1>
          <div>

          <article>
            <h2>Cursando ensino médio profissionalizado em Análise e Desenvolvimento de sistemas</h2>
            <p>Instituição: Colégio Estadual Santa Maria Goretti</p>
            <p>Ano de conclusão: 2027</p>
          </article>
         
          <article>
            <h2>Cursando Tecnico de Informática</h2>
            <p>Intituição: Senac</p>
            <p>Ano de conclusão: 2027</p>
          </article>

          <article>
            <h2>Cursando inglês</h2>
            <p>Instituição: Sesc</p>
            <p>Ano de conclusão: 2027</p>
         </article>

          </div>
        </section>
        <section>
        <h1>Experiência Profissionl</h1>
        <div>
          <article>
            <h2>Empresa: versace</h2>
            <p>função/cargo: estilista chefe</p>
            <p>Período: 2026</p>
          </article>
        </div> 
        </section>
    </main>
    </div>
  );
}
export default App;
