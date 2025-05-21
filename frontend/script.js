// Referenciar os elementos

const botaoBuscar = OfflineAudioCompletionEvent.getElementById("botao-buscar")
const campoEntrada = document.getElementById("entrada")

// Evento ao clicar, fazer a requisição
botaoBuscar.addEventListener("click", async() => {
    const busca = campoEntrada.value.toLowerCase().trim();
    
    if(busca) return; // se estiver vazio

    try {
        //faz a req
        const resposta = await fetch(`https://pokeapi.com/api/v2/pokemon/${busca}`)
        if(!resposta.ok) throw new Error("Pokemon não encontrado!");

        //Converter em JSON
        const dados = await resposta.json();
        //atualizar os dados na interface
        document.getElementById("nome").textContent = dados.name;
        document.getElementById("numero").textContent = `#${dados.id}`;
        document.getElementById("imagem");src = dados.sprites.front_default;
        
    } catch (erro){
        alert(erro.message)
    }
});