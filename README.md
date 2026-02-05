# 👵 Receitas de Vó - AI Chef

> "O que tem na geladeira hoje, meu netinho?"

![Status do Projeto](https://img.shields.io/badge/Status-Concluído-brightgreen)
![Python](https://img.shields.io/badge/Backend-Python%20%7C%20FastAPI-blue)
![React](https://img.shields.io/badge/Frontend-React%20%7C%20Vite-61DAFB)
![AI](https://img.shields.io/badge/AI-Google%20Gemini-orange)

## 📖 Sobre o Projeto

O **Receitas de Vó** é uma aplicação web full-stack que resolve o eterno problema do *"não sei o que cozinhar"*. 

Utilizando a inteligência artificial do **Google gemini flash latest**, o sistema analisa os ingredientes que o usuário tem disponíveis e cria receitas personalizadas, criativas e com uma "personalidade" única (Vó Mineira, Nonna Italiana, etc.).

O projeto apresenta uma interface moderna, responsiva e utiliza uma arquitetura unificada onde o Backend serve o Frontend estático.

## ✨ Funcionalidades

- **🧠 Geração de Receitas com IA:** Cria pratos completos baseados apenas na lista de ingredientes.
- **👵 Personalidades Dinâmicas:** A IA assume personas (Vó Mineira, Italiana, Moderna) para dar dicas e escrever o modo de preparo.
- **🎨 Design Responsivo:** Interface moderna com Glassmorphism, funcionando perfeitamente em Desktop e Mobile.
- **⚡ Performance:** Backend assíncrono com FastAPI e Frontend otimizado com Vite.

## 📸 Screenshots

*(Coloque aqui os prints do seu projeto. Sugestão: Crie uma pasta chamada `.github/images` e salve os prints lá)*

<div style="display: flex; gap: 10px;">
  <img src="./.github/images/desktop.png" alt="Visual Desktop" width="600">
  <img src="./.github/images/mobile.png" alt="Visual Mobile" width="200">
</div>

## 🛠️ Tecnologias Utilizadas

### Backend
- **Python 3.x**
- **FastAPI** (API Rest)
- **Google Generative AI** (Integração com Gemini)
- **Pydantic** (Validação de dados)
- **Uvicorn** (Servidor ASGI)

### Frontend
- **React.js**
- **Vite**
- **Axios** (Consumo de API)
- **CSS Modules / CSS-in-JS**

---

## 🚀 Como rodar o projeto localmente

Siga os passos abaixo para ter a Vó cozinhando no seu computador.

### Pré-requisitos
- Python instalado
- Node.js instalado
- Uma chave de API do Google Gemini (Google AI Studio)

### 1. Configurando o Backend

```bash
# Clone o repositório
git clone [https://github.com/seu-usuario/receitas-de-vo.git](https://github.com/seu-usuario/receitas-de-vo.git)
cd receitas-de-vo/backend

# Crie um ambiente virtual
python -m venv venv

# Ative o ambiente virtual
# No Windows:
.\venv\Scripts\activate
# No Linux/Mac:
source venv/bin/activate

# Instale as dependências
pip install -r requirements.txt