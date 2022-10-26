async function listaVideos() {

    const conexao = await fetch("http://localhost:3000/videos")
    const conexaoConvertida = await conexao.json();

    return conexaoConvertida
    // console.log(conexaoConvertida)  

}

export const conectaApi ={

    listaVideos

} 



