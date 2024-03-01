import { question } from "readline-sync"

situacao = "prova final"

function aprovadoounao(not1,not2){
    const media = (not1 + not2)/2
    if (media >=7){
        return 'aprovado'
    }if(media<7){
        return `prova final`
    }
}

function print(text){
    return console.log(text)
 }
 
 function get_number(text){
    const numero = Number(question(text))
    return numero
 }

function main(){
    const nota1 = get_number('digite sua nota 1: ')
    const nota2 = get_number('digite sua nota 2: ')
    
    const situacao = aprovadoounao(nota1,nota2)

}

main()