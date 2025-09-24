# Site da Comunidade Quilombola Negros do Riacho

Este é um site estático completo desenvolvido em HTML, CSS e JavaScript puro para a Comunidade Quilombola Negros do Riacho, localizada em Currais Novos - RN.

## 📁 Estrutura dos Arquivos

```
/
├── img                 # Pasta com as imagens utilizadas no site
├── index.html          # Página principal com todas as seções
├── styles.css          # Estilos CSS responsivos
├── script.js           # JavaScript para interações
└── README.md           # Este arquivo de instruções
````

## 🎨 Características do Design

- **Cores**: Paleta terrosa e verde natural (marrom, verde, tons de terra)
- **Tipografia**: Fonte Inter para legibilidade
- **Layout**: Responsivo para desktop, tablet e mobile
- **Navegação**: Barra fixa no topo com menu hambúrguer para mobile

## 📱 Seções do Site

1. **Introdução** - Apresentação da comunidade
2. **História** - Linha do tempo da comunidade
3. **Louça de Barro** - Galeria de produtos artesanais
4. **Marca** - Identidade visual e branding
5. **Galeria** - Fotos da comunidade

## 🔄 Como Substituir as Imagens

### Imagens que precisam ser substituídas:

1. **`placeholder.jpg`** - Foto principal da comunidade (seção Introdução)
2. **`produto1.jpg` a `produto4.jpg`** - Fotos dos produtos de louça de barro
3. **`foto1.jpg` a `foto6.jpg`** - Fotos para a galeria
4. **`logo-placeholder.png`** - Logo da comunidade
5. **`etiqueta-exemplo.png`** - Exemplo de etiqueta para produtos

### Instruções:

1. **Mantenha os nomes dos arquivos** exatamente como estão  
2. **Substitua apenas o conteúdo** das imagens  
3. **Recomendações de tamanho**:  
   - Foto principal: 800x600px  
   - Produtos: 400x300px  
   - Galeria: 600x400px  
   - Logo: 300x200px  
   - Etiqueta: 400x200px  

## 🚀 Como Usar

1. **Abra o arquivo `index.html`** em qualquer navegador  
2. **Navegue pelas seções** usando o menu superior  
3. **Teste a responsividade** redimensionando a janela  
4. **Interaja com a galeria** clicando nas imagens  

## ✨ Funcionalidades JavaScript

- **Navegação suave** entre seções  
- **Lightbox** para visualização ampliada das imagens  
- **Menu mobile** com hambúrguer  
- **Animações** de entrada para elementos  
- **Efeitos hover** nos cards de produtos  
- **Navegação por teclado** no lightbox (setas esquerda/direita, ESC)  

## 🎯 Personalização

### Para alterar textos:
- Edite diretamente no arquivo `index.html`  
- Procure pelos comentários `<!-- SUBSTITUA: ... -->`  

### Para alterar cores:
- Modifique as variáveis CSS no arquivo `styles.css`  
- Procure por `:root` no início do arquivo  

### Para adicionar mais produtos:
- Copie um bloco `.product-card` existente  
- Altere o `src` da imagem e o conteúdo  

## 📱 Responsividade

O site foi desenvolvido para funcionar perfeitamente em:
- **Desktop** (1200px+)  
- **Tablet** (768px - 1199px)  
- **Mobile** (até 767px)  

## 🌟 Características Especiais

- **Design acolhedor** com tons terrosos  
- **Navegação intuitiva** com indicadores visuais  
- **Carregamento otimizado** com lazy loading  
- **Acessibilidade** com navegação por teclado  
- **Animações suaves** para melhor experiência  

## 📞 Suporte

Este site foi desenvolvido especificamente para a Comunidade Quilombola Negros do Riacho. Todas as imagens são placeholders e devem ser substituídas por fotos reais da comunidade.

---

**Desenvolvido com ❤️ para valorizar a tradição e cultura quilombola**

---

## 📝 Tutorial: Como se conectar ao repositório e enviar alterações (Git/GitHub para iniciantes)

Este guia é para pessoas que **nunca usaram Git**. Ele explica o básico de como obter o código, fazer alterações e enviá-las para o GitHub.

### 🔹 1. Pré-requisitos

- Ter o **Git instalado** no seu computador:  
  - [Download Git para Windows](https://git-scm.com/download/win)  
  - [Download Git para Linux/Mac](https://git-scm.com/downloads)  
- Ter uma conta no [GitHub](https://github.com/) e estar logado.  
- Ter permissão de acesso ao repositório.  

Para verificar se o Git está instalado, abra o terminal (ou Prompt de Comando) e digite:

```bash
git --version
````

Se aparecer um número de versão (ex: `git version 2.44.0`), está tudo certo.

---

### 🔹 2. Clonar (baixar) o repositório

Clonar significa baixar o código para seu computador e já configurar a conexão com o GitHub.

No terminal:

```bash
git clone https://github.com/levi-navlig/Projeto-IFRN---Comunidade-Quilombola-Negros-do-Riacho-.git
```

Isso criará uma pasta com todos os arquivos.

Entre na pasta:

```bash
cd Projeto-IFRN---Comunidade-Quilombola-Negros-do-Riacho-
```

---

### 🔹 3. Configurar seu usuário do Git (primeira vez)

Isso associa seus commits ao seu nome e e-mail no GitHub:

```bash
git config --global user.name "Seu Nome"
git config --global user.email "seu-email@exemplo.com"
```

---

### 🔹 4. Criar um novo branch (opcional, mas recomendado)

Branches são “linhas de trabalho” separadas. Para não mexer direto no `main`:

```bash
git checkout -b minha-alteracao
```

Agora você está em um branch chamado `minha-alteracao`. Faça suas modificações nos arquivos.

---

### 🔹 5. Adicionar as mudanças ao Git

Depois de editar arquivos, você precisa avisar ao Git quais arquivos quer enviar:

```bash
git add .
```

O ponto (`.`) significa “todos os arquivos modificados”.

---

### 🔹 6. Criar um commit (registrar suas alterações)

```bash
git commit -m "Descrição curta do que foi alterado"
```

O commit é como um “salvamento” local com mensagem do que foi feito.

---

### 🔹 7. Enviar (push) para o GitHub

Se você está em um branch novo:

```bash
git push -u origin minha-alteracao
```

Se você está no branch principal (`main`):

```bash
git push
```

> ⚠️ Se aparecer erro dizendo que seu branch está “behind” (atrás) do remoto, rode antes:
>
> ```bash
> git pull origin main
> ```
>
> Resolva conflitos, depois faça o `git push` novamente.

---

### 🔹 8. Atualizar seu código local (pull)

Sempre antes de começar um trabalho novo, atualize sua cópia local com:

```bash
git pull origin main
```

Isso evita conflitos.

---

### 🔹 9. Visão geral dos comandos usados

| Comando                | Função                                      |
| ---------------------- | ------------------------------------------- |
| `git clone URL`        | Baixa o repositório para seu computador     |
| `git checkout -b nome` | Cria e troca para um branch novo            |
| `git add .`            | Adiciona alterações para commit             |
| `git commit -m "msg"`  | Cria um commit com mensagem                 |
| `git push`             | Envia alterações para o GitHub              |
| `git pull`             | Atualiza seu repositório local com o remoto |

---

### 🔹 10. Dicas extras

* **Commits pequenos**: cada mudança com uma mensagem clara.
* **Mensagens descritivas**: “Corrige bug no menu mobile” é melhor que “Update”.
* **Não usar `--force`** sem certeza: pode sobrescrever o trabalho dos outros.

---

Com esse passo a passo, qualquer pessoa sem experiência em Git consegue:

1. Baixar o projeto (clone),
2. Alterar arquivos localmente,
3. Registrar as alterações (add + commit),
4. Enviar de volta para o GitHub (push),
5. E atualizar sua cópia com as mudanças dos outros (pull).


---

## 🔄 Fluxo Visual do Git (Clone → Branch → Add/Commit → Push)

    ┌────────────────┐
    │   GitHub       │
    │ (repositório)  │
    └───────┬────────┘
            │ git clone
            ▼
    ┌────────────────┐
    │  Seu PC        │
    │ (cópia local)  │
    └───────┬────────┘
            │ git checkout -b minha-alteracao
            ▼
    ┌────────────────┐
    │  Edição de     │
    │  arquivos      │
    └───────┬────────┘
            │ git add .
            │ git commit -m "msg"
            ▼
    ┌────────────────┐
    │  Commits salvos│
    │  localmente    │
    └───────┬────────┘
            │ git push origin minha-alteracao
            ▼
    ┌─────────────────────┐
    │   GitHub            │
    │ (recebe alterações) │
    └─────────────────────┘