let numvendas = document.querySelector('input#txtven')
let numvalores = document.querySelector('input#txtval')
let lista = document.querySelector('select#selven')
let res = document.querySelector('div#res')
let vendas = [] //lista de vendas
let valores = [] // lista dos valores das vendas
let canceladas = [] // vendas canceladas
let somadin = 0 //soma valores recebidos em dinheiro
let somacar = 0 //soma dos valores recevidos em cartao
let somapra = 0 //soma das vendas a prazo
let somache = 0 //soma dos valores recebidos em cheque
let chequetrocovalor = 0 
//função para verificar venda cadastrada
function inlista(n, l){ //recebe o numero e os elementos da lista e verifica se está na lista
if(l.indexOf(Number(n))!= -1){ //indexOf verifica a posição do elemento
    return true
}else{
    return false
}
}

function cadastrar(){ // inseri o valor da venda e seu numero ao select e as listas
 if(numvalores.value == 0){ //caso seja venda com valor 0 incluir venda em canceladas
        window.alert('Venda cancelada!')
        canceladas.push(Number(numvendas.value))
           res.innerHTML = `Venda: ${canceladas} cancelada!`
        numvendas.value =Number(numvendas.value) + Number(1) //adiciona o numero da proxima venda no campo 
        numvalores.focus() //coloca o cursor do mouse no campo de valores para cadastro proxima venda
    }else{ //inseri vendas na select e nas listas
    if(!inlista(numvendas.value, vendas)){
            //bloco para verificar tipo de pagamento e incluir venda na soma de cada tipo
        let tipopag = "" //recebe o tipo de pagamento.
        let radiotipo = document.getElementsByName('radtip')
        if(radiotipo[0].checked){
            tipopag = "Dinheiro"
            somadin = somadin + Number(numvalores.value)
        }else if(radiotipo[1].checked){
            tipopag = "Cartão"
            somacar = somacar +Number(numvalores.value)
        }else if(radiotipo[2].checked){
            tipopag = "Prazo"
            somapra = somapra + Number(numvalores.value)
        }else{
            tipopag ="cheque"
            somache = somache + Number(numvalores.value)
        }
        //bloco para incluir o valor nas listas de valores e vendas e na select
        valores.push(Number(numvalores.value)) //adiciona valor da venda na lista de vendas
        vendas.push(Number(numvendas.value)) // adicionar numeroda venda a uma lista
        let item = document.createElement('option') // cria espaço na select para incluir venda
        item.text =`Venda:${numvendas.value} valor: R$${numvalores.value} tipo pagamento: ${tipopag}` //mostra na select o valor cadastrado
        lista.appendChild(item) //cria item na select com a venda cadastrada
        //bloco para incluir a soma parcial dos valores recebido e confirmar a venda cadastrada
        res.innerHTML = `Venda: ${numvendas.value} Valor: ${numvalores.value} cadastrada ! <br> 
        Total em Dinheiro: R$${somadin} <br>
        Total em Cartão: R$${somacar} <br>
        Total em Fiado: R$${somapra}<br>
        Total em cheque: R$${somache}<br>`
        //coloca o proximo numero da venda e o foco no campo de valor.
        numvendas.value =Number(numvendas.value) + Number (1)
        numvalores.value = ''
        numvalores.focus()
        
    }else {
        window.alert('Venda já cadastrada!')
        numvendas.value =Number(numvendas.value) + Number (1)
        numvalores.value = ''
        numvalores.focus()
    }
}
        
 
}

function excluir(){
    if(valores.length == 0){
        window.alert('Não valores para excluir!')
    }else{
}
}
function chequetroco(){
//let chequetroconumero= prompt("Digite o numero do Cheque")
chequetrocovalor = prompt(" Digite o valor do Cheque troco:")
}
function finalizar(){
    if(valores.length == 0){
        window.alert('Adicione valore para finalizar!')
    }else{
        let dincaixa = prompt("Digite o valor em dinheiro")
        let carcaixa = prompt("Digite o valor dos cartões no caixa")
        let pracaixa = prompt("Digite o valor recebido no Caixa a prazo:")
        let checaixa =  prompt("Digite os valore dos cheques recebidos")
        let totalcaixa = Number(dincaixa) + Number(carcaixa) + Number(pracaixa) + Number(checaixa) - Number(chequetrocovalor)
        let totaldia = somadin + somacar + somapra + somache
        let diferenca = totaldia - totalcaixa
        res.innerHTML = `<br><br> 
        Total em Dinheiro:       R$${somadin} <br>
        Total em Dinheiro caixa: R$${dincaixa} <br>
        <br><br>
        Total em Cartão:       R$${somacar} <br>
        Total em Cartão caixa: R$${carcaixa} <br>
        <br><br>
        Total    Prazo:      R$${somapra}<br>
        Total    Prazo Caixa:R$${pracaixa}<br>
        <br><br>
        Total em cheque: R$${somache}<br>
        Total em cheque: R$${checaixa}<br>
        Total em Cheque troco : R$${chequetrocovalor}
        <br><br>
        <br> Total Sistema: R$${totaldia}<br>
             Total Caixa:   R$${totalcaixa}<br>
             Diferença =    R$${diferenca}<br>`
        //coloca o proximo numero da venda e o foco no campo de valor.
        numvendas.value =Number(numvendas.value) + Number (1)
        numvalores.value = ''
        numvalores.focus()
    }



}