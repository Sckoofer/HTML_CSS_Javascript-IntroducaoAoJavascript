function carregar()
{
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')


    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas`
    
    /*A linha 12 configura as horas, coloque
    outros valores para modificar as horas*/
    hora = 6
    if(hora >= 0 && hora <12){
        //BOM DIA!
        img.src="imagens/manha.jpg"
        document.body.style.background =  '#FE7445'

    } else if (hora >= 12 && hora <= 18){
        //BOA TARDE!
        img.src="imagens/tarde.jpeg"
        document.body.style.background =  '#FF8C3B'
    } else{
        //BOA NOITE!
        
        img.src="imagens/noite.jpeg"
        document.body.style.background =  '#4E3F60'
    }
}
