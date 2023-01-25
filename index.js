import { create } from "venom-bot";

create({
  session: "chat-gpt",
  multidevice: true,
})
  .then((client) => start(client))
  .catch((erro) => {
    console.log(erro);
  });

async function start(client) {
  const botText = "contato@royaltycontabilidade.com.br,  Tel (43) 3351-3130 ,  Rua Guarujá, 325";
//   const botText = "🤖 world 🌎";
  // Da um console.log em message depois, tem muita coisa bacana
  client.onAnyMessage((message) => {
    if (message.body.toLowerCase() === "royalty") {
      // message.from é o número do usuário que enviou a msg "hello"
      client.sendText(message.from, botText);
    }
  });
}
