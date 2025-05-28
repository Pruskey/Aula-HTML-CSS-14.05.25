// Referenciar os elementos

const botaoBuscar = document.getElementById("bota-buscar"); // Certifique-se de que o ID está correto
const campoEntrada = document.getElementById("entrada");

// Evento ao clicar, fazer a requisição
botaoBuscar.addEventListener("click", async () => {
    const busca = campoEntrada.value.toLowerCase().trim();
    
    if (!busca) {
        alert("Por favor, insira o nome ou número do Pokémon.");
        return; // Retorna se o campo estiver vazio
    }

    try {
        // Faz a requisição
        const resposta = await fetch(`https://pokeapi.co/api/v2/pokemon/${busca}`);
        if (!resposta.ok) throw new Error("Pokémon não encontrado!");

        // Converter em JSON
        const dados = await resposta.json();

        // Atualizar os dados na interface
        document.getElementById("nome").textContent = dados.name;
        document.getElementById("numero").textContent = `#${dados.id}`;
        document.getElementById("imagem").src = dados.sprites.front_default;
        
        // Exibir tipo do Pokémon
        const tipoElemento = document.getElementById("tipo");
        tipoElemento.textContent = dados.types.map(tipoInfo => tipoInfo.type.name).join(', ');
    } catch (erro) {
        console.error(erro.message);
        alert("Erro: " + erro.message); // Exibe o erro ao usuário
    }
});