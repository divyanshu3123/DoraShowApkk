const faq = {
  "how to subscribe": "Click the Subscribe button and pick a plan.",
  "plans": "We have Basic (₹99), Premium (₹199), and Family (₹299).",
  "genres": "Action, Comedy, Horror, Kids, Romance and more.",
  "video not playing": "Try refreshing or clearing your browser cache.",
  "app crashing": "Please update to the latest version.",
  "support": "Email us at support@dorashow.tech anytime!"
};

// Suggested FAQ questions
const suggested = [
  "How to subscribe",
  "Plans",
  "Genres",
  "Video not playing",
  "Support"
];

// Toggle chatbot display and show suggestions
document.getElementById("chatbot-toggle").onclick = function () {
  const box = document.getElementById("chatbot-box");
  box.style.display = box.style.display === "block" ? "none" : "block";

  if (box.style.display === "block") {
    renderSuggestions();
  }
};

function chatbotReply() {
  const input = document.getElementById("chatbot-input");
  const query = input.value.trim().toLowerCase();
  const chat = document.getElementById("chatbot-messages");

  if (query === "") return;

  chat.innerHTML += `<p><b>You:</b> ${query}</p>`;

  const response = faq[query] || "🤖 Sorry, I didn't understand. Try asking about plans, subscription, or support.";

  chat.innerHTML += `<p><b>DoraBot:</b> ${response}</p>`;
  chat.scrollTop = chat.scrollHeight;
  input.value = "";
}

function renderSuggestions() {
  const container = document.getElementById("chatbot-suggestions");
  container.innerHTML = "";
  suggested.forEach(q => {
    const btn = document.createElement("div");
    btn.className = "suggestion";
    btn.innerText = q;
    btn.onclick = () => {
      document.getElementById("chatbot-input").value = q;
      chatbotReply();
    };
    container.appendChild(btn);
  });
}

