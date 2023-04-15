$(document).ready(function () {
  $("#telefone").mask("(00) 00000-0000");
  $("form").validate({
    rules: {
      nome: {
        required: true,
      },
      email: {
        required: true,
      },
      telefone: {
        required: true,
      },
    },
    messages: {
      nome: "por favor insira o seu nome!",
      email: "por favor insira seu email",
      telefone: "por favor insira seu telefone!",
    },
    submitHandler: function (form) {
      const nome = $("#nome").val();
      alert(`cadastro de ${nome} feito com sucesso!`);
    },
    invalidHandler: function (evento, validador) {
      let camposIncorretos = validador.numberOfInvalids();
      if (camposIncorretos) {
        alert(`existe ${camposIncorretos} campos incorretos!`);
      }
    },
  });
});

$(".lista-produtos button").click(function () {
  const destino = $("#contato");
  const nomeProduto = $(this).parent().find("h3").text();

  $("#item-interesse").val(nomeProduto);

  $("html").animate(
    {
      scrollTop: destino.offset().top,
    },
    1000
  );
});

const ativadorToast = document.getElementById("btn-checar-carrinho");
const mensagem = document.getElementById("mensagens-alerta");

if (ativadorToast) {
  ativadorToast.addEventListener("click", function () {
    const toast = new bootstrap.Toast(mensagem);
    toast.show();
  });
}
