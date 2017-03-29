#### Uma longa introdução ao Elixir

29/03/2017

> [TODO]


Elixir é uma linguagem de tipagem dinâmica e forte, criada para o desenvolvimento de sistemas escaláveis, robustos e de fácil manutenção. Essa é a menor descrição que posso disponibilizar no momento sobre os motivos da criação do Elixir.


Apesar de ser uma linguagem relativamente nova (6 anos), por rodar na máquina virtual do Erlang, criada pela Ericsson faz mais de vinte anos para rodar em switches de telecom, o Elixir está em uma posição bastante confortável, por estar fundado em um ecossistema bastante sólido e criado desde o início para auxiliar no desenvolvimento de aplicações que precisavam funcionar em múltiplos cores, serem bastante escaláveis, tolerantes à falhas e terem baixíssima latência.


##### Os três pilares do Elixir/Erlang

Pela natureza da complexidade do sistemas de telecom, a máquina virtual do Erlang foi projetada com várias asserções sobre como auxiliar no desenvolvimento de aplicações para o mundo de telecom. Coincidentemente, hoje em dia temos os mesmos problemas que telecom tinham há vinte anos atrás, no desenvolvimento de aplicações web, apesar de estarmos em domínios razoavelmente diferentes. 


###### O primeiro pilar: Concorrência e Paralelismo

Uma das premissas do Erlang e, por conseguinte, do Elixir é a massiva concorrência e utilização eficiente de todos os cores do processador de sua máquina. A máquina virtual do Erlang nos dá um mecanismo simples e eficiente para realizarmos operações de forma concorrente e/ou paralela: processos. Esses processos são internos a máquina virtual, isolados e trocam informação através de mensagens. Você pode ter milhares desses processos rodando ao mesmo tempo.

Você não possui o controle de como ou onde esses processos serão executados. Contudo a máquina virtual do Erlang (também conhecida por BEAM), realiza as tarefas da seguinte maneira:

- Todos os processos possuem um valor fixo de trabalho (chamado de reduções). Quando essas reduções são consumidas, o scheduler do Erlang interrompe aquele processo e dá a vez a outro processo de ser executado.

- Para cada core na sua máquina, a VM do Erlang inicia um scheduler. Isto significa que com um core apenas, seus processos rodarão de forma concorrente. Com mais de um scheduler eles rodarão ora de forma concorrente, ora de forma paralela, pois os schedulers fazem balanço de carga (load-balancing).

Um exemplo bem simples de como iniciar um processo e enviar uma mensagem para ele:

-----
```elixir
current_process = self()

# Spawn an Elixir process (not an operating system one!)
spawn_link(fn ->
  send current_process, {:msg, "hello world"}
end)

# Block until the message is received
receive do
  {:msg, contents} -> IO.puts contents
end
```
-----
