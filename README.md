# 🎮 Jogo do Número Secreto — Imersão DevOps (Santander / Alura)

![Status](https://img.shields.io/badge/status-active-brightgreen)  
![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-ready-blue)  
![License](https://img.shields.io/badge/license-MIT-lightgrey)

<img src="./docs/assets/banner.png" alt="Banner do projeto" width="800"/>

---

## 🚀 Visão Geral
Mini-jogo em **HTML, CSS e JavaScript** desenvolvido no contexto da **Imersão DevOps** do programa **Santander + Alura**.  

O objetivo do jogo é adivinhar um **número secreto** sorteado pelo sistema, com feedback dinâmico ("maior/menor") até o acerto.  
Mais do que um exercício de lógica, este repositório também demonstra boas práticas de **DevOps** aplicadas a projetos estáticos (CI/CD, deploy automático, documentação e organização de repositório).

🔗 **Demo online (GitHub Pages):**  
👉 [https://lbarbatto.github.io/imersao-devops-jogo-numero-secreto/](https://lbarbatto.github.io/imersao-devops-jogo-numero-secreto/)

---

## 🧩 Funcionalidades
- Sorteio de número secreto (1–100 por padrão).
- Input validado (apenas números válidos).
- Feedback imediato:
  - "O número secreto é maior que..."
  - "O número secreto é menor que..."
- Contador de tentativas.
- Mensagem de vitória com **troféu animado** 🏆.
- Reset para iniciar novo jogo.

---

## 📸 Screenshots
<p align="center">
  <img src="./docs/assets/screenshot-inicio.png" alt="Tela inicial do jogo" width="400"/>
  <img src="./docs/assets/screenshot-jogo.png" alt="Jogo em andamento" width="400"/>
  <img src="./docs/assets/screenshot-vitoria.png" alt="Tela de vitória" width="400"/>
</p>

---

## 🛠️ Tecnologias
- **Frontend:** HTML5, CSS3, JavaScript (ES6)
- **Deploy:** GitHub Pages
- **DevOps:** GitHub Actions (CI/CD sugerido)
- **Boas práticas:** ESLint, Prettier, documentação clara

---

## ⚙️ Como rodar localmente

1. Clone o repositório:
```bash
git clone https://github.com/lbarbatto/imersao-devops-jogo-numero-secreto.git
cd imersao-devops-jogo-numero-secreto