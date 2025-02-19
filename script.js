const sendButton = document.getElementById('send-btn');
const inputBox = document.getElementById('user-input');
const chatBox = document.querySelector('.chat-box');

const aiResponses = {
  "hello": "Hi there! How can I help you today?",
  "how are you": "I'm an AI, so I'm doing great! How about you?",
  "bye": "Goodbye! Have a great day!",
  "default": "Sorry, I didn't understand that. Can you rephrase?"
};

sendButton.addEventListener('click', function() {
  const userInput = inputBox.value.trim().toLowerCase();
  
  if (userInput) {
    // Display user message
    const userBubble = document.createElement('div');
    userBubble.classList.add('chat-bubble', 'user');
    userBubble.innerHTML = `<p>${userInput}</p>`;
    chatBox.appendChild(userBubble);

    // AI response
    setTimeout(() => {
      const aiBubble = document.createElement('div');
      aiBubble.classList.add('chat-bubble', 'bot');
      aiBubble.innerHTML = `<p>${aiResponses[userInput] || aiResponses['default']}</p>`;
      chatBox.appendChild(aiBubble);
      chatBox.scrollTop = chatBox.scrollHeight; // Scroll to the bottom
    }, 1000);
  }

  inputBox.value = ''; // Clear input
});
