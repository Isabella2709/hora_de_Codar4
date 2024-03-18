function cadastrar() {
  let cadastro = prompt(
    "Você quer cadastrar um estudante (S - QUERO CADASTRAR / N - NÃO QUERO ENCERRAR OS CADASTROS)"
  );

  cadastro = cadastro.toUpperCase();

  while (cadastro == "S") {
    let nome = prompt("Digite o nome do aluno: ");
    let idade = prompt("Digite a idade do aluno: ");
    let serie = prompt("Digite a série do aluno: ");

    document.getElementById("mostraresult").innerHTML =
      "Aluno cadastrado com sucesso";

    cadastro = prompt(
      "Você quer cadastrar um novo aluno (S - SIM / N - NÃO): "
    ).toUpperCase();
  }

  if (cadastro == "N") {
    document.getElementById("mostraresult").innerHTML =
      "Você optou por não cadastrar";
  }
}

function comparray() {
  let listadeplanetas = [
    "Terra",
    "Marte",
    "Plutão",
    "Vênus",
    "Júpiter",
    "Saturno",
  ];

  let pergplan = prompt(
    "Digite um planeta, para vermos se ele esta na lista: "
  );

  let encontrado = false;

  for (let i = 0; i < listadeplanetas.length; i++) {
    if (pergplan === listadeplanetas[i]) {
      encontrado = true;
      break;
    }
  }

  if (encontrado == true) {
    alert("Planeta encontrado");
  } else if (encontrado == false) {
    alert("Planeta não encontrado");
  }
}



function listcomp() {
    let frutas = ["Maça", "Manga", "Banana", "Melancia"];
  
    for (let i = 0; i < frutas.length; ) {
      let questfruit = prompt(
        "Digite a fruta que deseja do mercado, nós temos: [Maça, Manga, Banana, Melancia]: "
      );
  
      let emestoque = false;
  
      for (let j = 0; j < frutas.length; j++) {
        if (questfruit === frutas[j]) {
          emestoque = true;
          frutas.splice(j, 1);
          document.getElementById("mostrafrut").innerHTML = "Pegamos a fruta para você";
          break;
        }
      }
  
      if (!emestoque) {
        document.getElementById("mostrafrut").innerHTML = "Infelizmente, essa fruta não está disponível no mercado.";
      }
  
      if (frutas.length === 0) {
        document.getElementById("mostrafrut").innerHTML = "Todos os itens da lista foram adquiridos.";
      }
    }
  }
