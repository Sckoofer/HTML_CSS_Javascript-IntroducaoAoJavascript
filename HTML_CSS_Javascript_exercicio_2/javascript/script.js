function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')

    if(fano.value.length == 0 || Number(fano.value) > ano)
    {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    }
    else
    {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        
        img.setAttribute('id', 'foto')

        if(fsex[0].checked)
        { 
            genero = 'um homem'
            document.body.style.backgroundColor = '#3278BC'
            if(idade >= 0 && idade <= 10)
            {
                //Criança
                genero = 'um menino'
                img.setAttribute('src', 'imagens/Menino.PNG')

            }else if(idade < 21)
            {
                // Jovem
                genero = 'um jovem'
                img.setAttribute('src', 'imagens/Jovem_Macho.PNG')
            }else if(idade < 50)
            {
                // Adulto
                img.setAttribute('src', 'imagens/Adulto_Macho.PNG')
            }else{
                // Idoso
                
                img.setAttribute('src', 'imagens/Idoso.PNG')
            }
        }

        if(fsex[1].checked)
        { 
            genero = 'uma mulher'
            document.body.style.backgroundColor = '#c27e89'
            if(idade >= 0 && idade <= 10)
            {
                //Criança
                genero = 'uma menina'
                img.setAttribute('src', 'imagens/Menina.PNG')
            }else if(idade < 21)
            {
                // Jovem
                genero = 'uma jovem'
                img.setAttribute('src', 'imagens/Jovem_Femea.PNG')
            }else if(idade < 50)
            {
                // Adulto
                img.setAttribute('src', 'imagens/Adulto_Femea.PNG')
            }else{
                // Idoso
                
                img.setAttribute('src', 'imagens/Idosa.PNG')
            }
        }
   
        
   
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.<br>`
        res.appendChild(img)
    }
}