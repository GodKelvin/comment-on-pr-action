const core = require('@actions/core');
const github = require('@actions/github');

async function run() {
  try {
    const token = process.env.GITHUB_TOKEN;
    const octokit = github.getOctokit(token);

    const { context } = github;
    const author = context.payload.pull_request.user.login;

const commentBody = `Olá, @${author}! 👋\n
Obrigado por abrir este PR.\n
Por favor, verifique se:\n
- [ ] Todos os testes estão passando ⚠️\n
- [ ] O PR está vinculado a uma issue (se aplicável) 🚩\n
- [ ] Você preencheu a descrição do PR com detalhes claros ✨\n
Nos avise se precisar de ajuda! 🚀`;



    await octokit.rest.issues.createComment({
      owner: context.repo.owner,
      repo: context.repo.repo,
      issue_number: context.payload.pull_request.number,
      body: commentBody
    });
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();
