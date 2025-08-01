function createMainMenuUI(onNavigate: (sceneName: string) => void) {
  const div = document.createElement("div");
  div.id = "main-menu-ui";

  const buttons = ["Join Game", "Create Game", "Profile", "Settings", "About"];
  buttons.forEach(label => {
    const btn = document.createElement("button");
    btn.textContent = label;
    btn.className = "main-menu-button";

    btn.onclick = () => onNavigate(label);
    
    div.appendChild(btn);
  });

  document.body.appendChild(div);
}

export { createMainMenuUI };