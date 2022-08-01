# MapaDev Week

## Evento de Programação do canal: Dev em Dobro

#### TECNOLOGIAS USADAS:

<div style="display:flex; gap:10px;">

<img 
width="40px"  
src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" />

<img 
width="40px" 
src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" />

<img 
width="40px"
src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />

</div>

Nesse evento, desenvolvemos uma aplicação no estilo "carrossel", e utilizamos JavaScript para fazer a passagem dos cards através dos dois botões que foram colocados ao lado do mesmo.

Utilizamos muita orientação a objeto através dos "id" para podermos receber o evento do 'click' do usuário.
Exemplo:


**Adicionando o botão na página:**
```html
<button id="enviar">Enviar</button>
```

**Pegando o id pelo JavaScript:**
```js 
const botaoEnviar = document.getElementById('enviar');
botaoEnviar.addEventListener('click', function() {});
```
Desse jeito conseguimos adicionar um evento no botão **Enviar** para ele "entender" o chamado do usuário.