<template>
  <div>
    <navbar></navbar>
    <br><br><br><br><br>
    <div class="container">
      <div class="row">
        <div class="col s12 center">
        
        </div>
      </div>
      <div class="row">
        <div class="col s12 m7">
          <h5>Sobre mim</h5>
          <hr />
          <p>Olá, sou <b>Iuri Lugão Machado</b>, e desenvolvo aplicações que demandam 
            <i>alta performance</i>, <i>baixa latência</i>, <i>tolerância a falhas</i> e 
            <i>escalabilidade</i>. </p>

          <p>Conhecido na internet como <b><i>@imetallica</i></b>, divido meu tempo entre 
             aprender e criar coisas novas. Acredito que novas tecnologias irão transformar
             empresas, bem como aumentar a velocidade com que desenvolvemos e a facilidade 
             que damos manutenção ao nossos produtos.</p>
          
          <p>
            Possuo mais de 10 anos de experiência em desenvolvimento de software e já
            desenvolvi projetos para o Brasil e o exterior.
          </p>

          <p>
            Atualmente aprendendo Machine Learning e Deep Learning. Acredito que essas
            tecnologias irão moldar o futuro e prover o diferencial de competitividade
            para muitas empresas já estabelecidas e startups. 
          </p>

          <br />

          <h5>Como posso ajudar?</h5>
          <hr />
          <ol>
            <li>
              <p>
                Arquitetando soluções e prestando consultoria. Possuo vasta experiência
                desenvolvendo aplicações escaláveis e distribuídas em Python e 
                Elixir/Erlang.
              </p>
            </li>

            <li>
              <p>
                Migrando aplicações monolíticas para microserviços. Nos dias de hoje, é
                cada vez mais rápido o ciclo de desenvolvimento -> teste -> deploy, para
                rapidamente responder a possíveis erros e requerimentos diversos. 
                Microserviços nos permitem tanto escalar pedaços de uma aplicação quanto
                realizar deploy muito mais rapidamente de uma aplicação, reduzindo custos.
                Bem como, aumentar a velocidade com que novas funcionalidades são adicionadas
                ao seu produto.
              </p>
            </li>

            <li>
              <p>
                Oferecendo treinamento e consultoria com melhores práticas com bancos de dados
                orientados a documentos e grafos. Com o advento dos microserviços, o volume de
                dados gerados pela sua aplicação aumenta, bem como a flexibilidade em utilizar
                as melhores ferramentas para resolver o problema específico de um pedaço da sua
                aplicação. Por exemplo, modelar um sistema que detecta fraudes em pagamentos é
                muito mais simples de ser feito com um banco orientado a grafos que um banco 
                relacional, como MySQL ou PostgreSQL.
              </p>
            </li>
          </ol>

          <br />


          <div class="center">
            <hr />
            <p>Caso a ideia de trabalhar comigo lhe agrada, precisaremos conversar para que eu 
               possa entender melhor o seu problema e como posso contribuir para auxiliar a você
               ou sua empresa.</p>
            <br />
            <a href="mailto:imetallica@hotmail.com" target="_top"
               class="btn deep-purple darken-4"> Entre em contato </a>
          </div>
        </div>
        <div class="col s12 m1"></div>
        <div class="col s12 m4 center">
          <twitter></twitter>
        </div>
      </div>
    </div>
    <br/>
    <div class="center">
      <p><b>&copy; {{year}}. All rights reserved.</b></p>
    </div>
  </div>
</template>

<script>
const Index = {
  data: function() {
    return {
      year: new Date().getYear() + 1900
    }
  }
}

export default Index
</script>

