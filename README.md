# 🤖 Comentário Automático em Pull Requests

Este repositório contém uma **GitHub Action** que posta automaticamente um comentário sempre que um novo **Pull Request** (PR) é aberto na branch `main`.

---

## 💡 O que essa Action faz?

Sempre que um PR é aberto:

- Detecta o nome de usuário do autor do PR
- Posta automaticamente um comentário no próprio PR com instruções úteis, como:
  - Verificar se os testes estão passando
  - Garantir que o PR está vinculado a uma issue
  - Preencher a descrição corretamente

---

# Comment on PR GitHub Action

Esta action adiciona automaticamente um comentário a pull requests quando eles são abertos.

## 📦 Como usar

Adicione o seguinte workflow no seu repositório:

```yaml
name: Comentário no PR

on:
  pull_request:
    types: [opened]

jobs:
  comment:
    runs-on: ubuntu-latest
    permissions:
      issues: write
      pull-requests: write
    steps:
      - uses: godkelvin/comment-on-pr-action@v1
        env:
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}

