#### [001] Uma longa introdução ao Elixir

---

> Elixir v1.4.5 - Erlang/OTP 20.0


##### O que é Elixir afinal?

---

Antes de tudo, se você nunca ouviu falar de Elixir ou já ouviu mas não tem ideia do que seja, esta primeira parte do post irá sanar algumas das suas dúvidas.

Elixir é uma linguagem de paradigma funcional, desenvolvida pelo brasileiro José Valim, que roda no topo da máquina virtual do Erlang, também conhecida como BEAM. Esta máquina virtual foi desenvolvida pela Ericsson, nos anos 90, para auxiliar no desenvolvimento de switches de telecom. Apesar de ter somente 5 anos de vida, o Elixir está numa situado numa posição confortável, pois por baixo dos panos existe uma plataforma bastante robusta e antiga.

Conhecida por sua alta tolerância a falhas, concorrência, paralelismo e distribuíção, o Elixir herdou todas essas características inerentes da plataforma, tornando-o assim uma excelente linguagem para desenvolver sistemas. Com uma sintaxe bem semelhante ao Ruby, o Elixir vem trazendo e conquistando vários desenvolvedores de várias outras plataformas pela simplicidade e elegância ao resolver problemas inerentemente complexos, como concorrência, com uma abordagem bastante simples e eficiente.


##### Como é programação funcional?

---

Programação funcional é um paradigma de programação, que possui como premissas básicas a separação entre estruturas de dados e comportamento, a imutabilidade e transformação dessas estruturas através de funções. Para isso, utilizamos alguns conceitos como recursividade, pattern-matching e funções anônimas. Vejamos alguns exemplos:

---
```
def factorial(0), do: 1
def factorial(1), do: 1
def factorial(x), do x * factorial(x - 1)
```
---

A função acima calcula fatorial. Contudo, ela possui um problema: aumenta a stack toda vez que você realiza a recursão. Para resolver este problema, fazemos o seguinte:

---
```
def factorial(x), do: factorial(x, 1)

defp factorial(0, acc), do: acc
defp factorial(1, acc), do: acc
defp factorial(x, acc), do: factorial(x - 1, x * acc)
```
---

Esta segunda função não aumenta a stack em cada recursão, pois a última chamada de função vem da *mesma* função. Poderíamos escrever essa função desta maneira também:

---
```
def factorial(x, acc \\ 1) do
  case x do
    0 -> acc
    1 -> acc
    x -> factorial(x - 1, acc * x)
  end
end
```
---

Em todos os casos acima, utilizamos pattern matching e recursão para resolver um problema de loop básico. O `\\` no segundo argumento é para dizer que este argumento é opcional e sua chamada será substituída pelo valor ao lado direito do `\\`. Contudo, não chegamos a ver ainda o conceito de função anônima. Segue um exemplo:

---
```
iex(1)> Enum.map([1, 2, 3], fn x -> x * 2 end)
[2, 4, 6]
```
---

Veja que `Enum.map/2` é uma função de dois parâmetros: o primeiro é uma lista a ser iterada e o segundo uma função que será aplicada a cada valor da lista, retornando uma nova lista resultante. O `/2` no final no nome da função é a quantidade de argumentos que a função espera receber.


##### Instalação do Elixir e do Erlang

---

Agora que você já viu como é a sintaxe do Elixir e um pouco de programação funcional, vamos instalar a máquina virtual do Erlang e os binários do Elixir.

  - Linux: Os [pacotes](https://www.erlang-solutions.com/resources/download.html) da Erlang Solutions são o jeito mais simples de começar.

  - Mac: Rodando `brew install elixir` no seu terminal deverá instalar o Elixir junto com o Erlang.

  - Windows: Baixe e instale o [Erlang](http://www.erlang.org/downloads) primeiro e depois o [Elixir](https://elixir-lang.org/install.html#windows) destes links.

Ao final de tudo, executando `iex` no mac/linux ou `iex.bat` no windows, você deverá ter um output do tipo:

---
```
Erlang/OTP 20 [erts-9.0] [source] [64-bit] [smp:4:4] [ds:4:4:10] [async-threads:10] [hipe] [kernel-poll:false]

Interactive Elixir (1.4.5) - press Ctrl+C to exit (type h() ENTER for help)
iex(1)>
```
---

Se isto apareceu, parabéns, você tem o Elixir instalado com sucesso no seu computador.


##### Próximos passos

---

No próximo post iremos mostrar um pouco de como funciona o REPL do Elixir, bem como falaremos mais a fundo sobre os tipos e pattern matching. Aguardem!

