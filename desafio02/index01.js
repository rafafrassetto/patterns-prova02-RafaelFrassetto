
class PlataformaEnvio {
  enviar(texto) {}
}

class Email extends PlataformaEnvio {
  enviar(texto) {
    console.log(`[Email] Enviando: "${texto}"`);
  }
}


class SMS extends PlataformaEnvio {
  enviar(texto) {
    console.log(`[SMS] Enviando: "${texto}"`);
  }
}

class Mensagem {
  constructor(plataforma) {

    this.plataforma = plataforma;
  }


  disparar(texto) {
    this.plataforma.enviar(texto);
  }
}

class MensagemComLog extends Mensagem {

  registrarLog() {
    console.log("(Log: Mensagem sendo preparada para envio...)");
  }

}


const plataformaEmail = new Email();
const plataformaSMS = new SMS();


const msgSimples = new Mensagem(plataformaEmail);


const msgComLog = new MensagemComLog(plataformaSMS);



console.log("--- Mensagem Simples por Email ---");
msgSimples.disparar("Olá, tudo bem?");

console.log("\n");

console.log("--- Mensagem com Log por SMS ---");
msgComLog.registrarLog();
msgComLog.disparar("Reunião cancelada!");