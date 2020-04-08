function verificar(){
            var data = new Date()
            var ano = data.getFullYear()
            var fano = document.querySelector('input#iano')
            var res = document.querySelector('div#res')
            if (fano.value.length == 0 || fano.value>ano){
                window.alert('[ERRO} verifique os dados e preencha novamente')
            }else{
                var fsex = document.getElementsByName('isex')
                var idade = ano - Number(fano.value)
                var genero = ''
                var img = document.createElement('img')
                img.setAttribute('id','foto')
                if (fsex[0].checked){
                    genero = 'Masculino'
                    if(idade>=0 && idade<=10){
                        img.setAttribute('src', 'boykid.png')
                    }
                    else if(idade>10 && idade<18){
                        img.setAttribute('src','youngBoy.png')
                    }else if (idade>=18 && idade<60){
                        img.setAttribute('src','man.png')
                    }
                    else{
                        img.setAttribute('src','oldman.png')
                    }
                }else if (fsex[1].checked){
                    genero = 'Feminino'

                    if(idade>=0 && idade<=10){
                        img.setAttribute('src', 'girlkid.png')
                    }
                    else if(idade>10 && idade<18){
                        img.setAttribute('src','youngGirl.png')
                    }else if (idade>=18 && idade<60){
                        img.setAttribute('src','woman.png')
                    }
                    else{
                        img.setAttribute('src','oldwoman.png')
                    }
                }
                res.style.textAlign = "center"
                res.innerHTML = `detectamos o genero como ${genero} e idade igua á ${idade} `
                res.appendChild(img)
            }
        
        }
