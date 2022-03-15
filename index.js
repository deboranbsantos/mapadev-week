/*Quando clicar no pokemon da listagem temos que esconder o cartão do pokemon aberto e mostrar o cartão correspondente ao que foi selecionado na listagem.

Pra isso vamos precisar trabalhar com dois elementos 
1-Listagem
2-cartão do pokemon

Precisamos criar duas variaveis no JS para trabalhar com os elementos da tela

Vamos precisar trabalhar com um evento de clique feito pelo usuario na listagem do pokemons.

- Remover a classe aberto só do cartão que esta aberto
- Ao clicar em um pokemon da listagem pegamos o id desse pokemon pra saber qual cartão mostrar
- Remover a classe ativa que marca o pokemon selecionado
- Adicionar a classe ativo no item da lista selecionado

*/

// Variaveis

const listaSelecaoPokemons =  document.querySelectorAll('.pokemon')
const pokemonsCard = document.querySelectorAll('.cartao-pokemon')

// evento de click
listaSelecaoPokemons.forEach(pokemon => {
    // ao clicar pegamos o id do cartao
    pokemon.addEventListener('click', () => {
        
        // Remover a classe aberto e só mostra o cartão selecionado
        const cartaoPokemonAberto = document.querySelector('.aberto')
        cartaoPokemonAberto.classList.remove('aberto')

        // ao clicar em um pokemon da listagem pegamos o id desse pokemon pra saber qual cartao mostrar
        const idPokemonSelecionado = pokemon.attributes.id.value

        // mostramos o cartao selecionado
        const idDoCartaoPokemonParaAbrir = 'cartao-'+idPokemonSelecionado
        const cartaoPokemonParaAbrir = document.getElementById(idDoCartaoPokemonParaAbrir)
        cartaoPokemonParaAbrir.classList.add('aberto')

        //Remover a classe ativo que marca o pokemon selecionado

        const pokemonAtivoNaListagem = document.querySelector('.ativo')
        pokemonAtivoNaListagem.classList.remove('ativo')

        const pokemonSelecionadoNaListagem = document.getElementById(idPokemonSelecionado)
        pokemonSelecionadoNaListagem.classList.add('ativo')
    }) 
})