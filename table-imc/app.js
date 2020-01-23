function protected() {
  const form = document.querySelector('#form');
  const exibeResultado = document.querySelector('.exibeResultaImc');

  function operacao(event) {
    event.preventDefault(); 

    const getPeso = document.querySelector('.peso').value;
    const getAlt = document.querySelector('.altura').value;

    const IMC = getPeso / ( getAlt * getAlt );

    return exibeResultado.innerHTML = `Seu IMC é: ${IMC.toFixed(2)}`
  }

  form.addEventListener('submit', operacao);

}

protected();