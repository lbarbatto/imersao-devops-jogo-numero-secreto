<h1 align="center">🎯 Jogo do Número Secreto</h1>

<p align="center">
  <img src="./img/robot.png" alt="Robô mergulhador" width="140" />
</p>

<p align="center">
  <a href="https://lbarbatto.github.io/imersao-devops-jogo-numero-secreto/">🚀 Acessar Demo (GitHub Pages)</a> •
  <a href="#-sobre">Sobre</a> •
  <a href="#-tecnologias">Tecnologias</a> •
  <a href="#-como-executar">Como executar</a> •
  <a href="#-devops--boas-práticas">DevOps & Boas práticas</a> •
  <a href="#-contribuição">Contribuição</a> •
  <a href="#-licença">Licença</a>
</p>

---

## 📌 Sobre

Este repositório faz parte do meu processo de estudos em DevOps na Santander Imersão Digital (Alura). É um minigame web simples: você tenta adivinhar um número secreto entre 1 e 100. Além do jogo, o foco aqui é treinar organização de repositório, documentação, segurança e deploy com GitHub Pages.

- **Status:** ativo e em evolução
- **Público-alvo:** pessoas desenvolvedoras iniciantes, recrutadores e colegas de estudos
- **Objetivos:** praticar JavaScript, GitHub Pages, automações e boas práticas de DevOps

---

## 🕹️ Funcionalidades

- **Gerar número aleatório** de 1 a 100
- **Entrada de palpite** com validação
- **Feedback dinâmico:** maior/menor e mensagem de acerto
- **Contador de tentativas**
- **Interface simples e responsiva**

---

## 🛠 Tecnologias

- **Frontend:** HTML5, CSS3, JavaScript (DOM)
- **Fonte:** Chakra Petch, Inter (Google Fonts)
- **Deploy:** GitHub Pages

---

## 🧭 Como executar

**Pré-requisitos:** navegador moderno (Chrome, Firefox, Edge, Safari).

1. **Clonar repositório**
git clone https://github.com/lbarbatto/imersao-devops-jogo-numero-secreto.git cd imersao-devops-jogo-numero-secreto

Código
2. **Abrir localmente**
- **Opção simples:** abra `index.html` diretamente no navegador.
- **Opção recomendada:** sirva localmente para evitar restrições de file://
  ```
  npx serve .
  ```
  Acesse o endereço indicado (ex.: http://localhost:3000).

---

## 🚀 Deploy com GitHub Pages

1. Confirme que seu projeto está na branch `main`.
2. No GitHub, vá em **Settings > Pages**.
3. Em **Source**, selecione `Deploy from a branch` e escolha `main` / `/root`.
4. Aguarde o build e acesse o link gerado:  
`https://lbarbatto.github.io/imersao-devops-jogo-numero-secreto`

> Dica: você pode configurar um **domínio personalizado** e habilitar HTTPS para uma presença mais profissional.

---

## 🔐 DevOps & Boas práticas

- **Segurança do repositório**
- **Dependabot alerts:** mantenha dependências seguras.
- **Secret scanning:** evita exposição de chaves/tokens.
- **Code scanning:** identifica vulnerabilidades e bugs.
- **Arquivos de governança**
- **LICENSE:** defina a licença (ex.: MIT).
- **SECURITY.md:** como reportar vulnerabilidades.
- **CONTRIBUTING.md:** instruções de contribuição.
- **CODE_OF_CONDUCT.md:** regras de convivência.
- **CI/CD (opcional)**
- Use GitHub Actions para rodar linters (ESLint), testes e deploy automático em push para `main`.

---

## 🤝 Contribuição

- **Fork** o repositório
- **Crie uma branch**: `feat/melhoria-x`
- **Commit** com mensagens claras
- **Abra um PR** descrevendo sua mudança

Sugestões bem-vindas: acessibilidade, internacionalização, testes, melhorias de UX/UI.

---

## 📄 Licença

Este projeto está sob a licença **MIT**. Veja `LICENSE` para mais detalhes.

---

## 📷 Capturas (opcional)

Inclua aqui GIFs ou imagens do gameplay:
- `img/screenshot-1.png`
- `img/screenshot-2.png`

---

## 🧩 Roadmap

- **A11y:** ARIA e foco melhorado
- **I18n:** pt-BR e en-US
- **Testes:** unitários para lógica (ex.: sorteio, validações)
- **Config:** permitir ajustar intervalo (1–N)
- **Analytics:** eventos básicos (acertos, tentativas)

---

## 🏷 Badges

![Status](https://img.shields.io/badge/status-active-brightgreen)
![Site](https://img.shields.io/badge/site-GitHub%20Pages-blue)
![License](https://img.shields.io/badge/license-MIT-lightgrey)