const chatbot = document.getElementById('chatbot');
const openChatbot = document.getElementById('open-chatbot');
const closeChatbot = document.getElementById('close-chatbot');
const sendMessage = document.getElementById('send-message');
const userInput = document.getElementById('user-input');
const chatbotMessages = document.getElementById('chatbot-messages');

// Função para determinar a resposta com base em palavras-chave
function getBotResponse(userMessage) {
  userMessage = userMessage.toLowerCase();

  if (userMessage.includes('oi') || userMessage.includes('ola')) {
    return 'Olá, o que deseja?';
  } else if (userMessage.includes('flores')) {
    return 'Temos uma grande variedade de flores! Quais você gostaria de saber mais?';
  } else if (userMessage.includes('obrigado') || userMessage.includes('obrigada')) {
    return 'De nada! Estou aqui para ajudar.';
  } else if (userMessage.includes('preço') || userMessage.includes('valor')) {
    return 'Os preços variam dependendo do produto. Poderia ser mais específico?';
  } else {
    return 'Desculpe, não entendi. Pode reformular sua pergunta?';
  }
}

// Exibir o chatbot
openChatbot.addEventListener('click', () => {
  chatbot.style.display = 'flex';
  openChatbot.style.display = 'none';
});

// Fechar o chatbot
closeChatbot.addEventListener('click', () => {
  chatbot.style.display = 'none';
  openChatbot.style.display = 'block';
});

// Enviar mensagem
sendMessage.addEventListener('click', () => {
  const userMessage = userInput.value.trim();
  if (userMessage) {
    // Adicionar a mensagem do usuário
    const userMessageElement = document.createElement('div');
    userMessageElement.textContent = userMessage;
    userMessageElement.classList.add('message', 'user-message');
    chatbotMessages.appendChild(userMessageElement);

    // Obter resposta do bot
    const botResponse = getBotResponse(userMessage);
    const botMessageElement = document.createElement('div');
    botMessageElement.textContent = botResponse;
    botMessageElement.classList.add('message', 'bot-message');
    chatbotMessages.appendChild(botMessageElement);

    // Limpar o campo de entrada
    userInput.value = '';

    // Rolagem automática para o final
    chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
  }
});
