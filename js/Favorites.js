// classe que irá conter a lógica dos dados
// como os dados serão estruturados

export class GitFavorites {
  constructor(root) {
    this.root = document.querySelector(root);
    this.load();
  }

  load() {
    this.entries = [
        {
            login: "matheusarb",
            name: "Matheus Ribeiro",
            public_repos: "31",
            followers: "189"
        },
        {
            login: "jgsneves",
            name: "Joao Gabriel",
            public_repos: "46",
            followers: "128"
        }
    ];
  }
}

export class GitFavoritesView extends GitFavorites {
  constructor(root) {
    super(root);

    this.tbody = this.root.querySelector("table tbody");
    this.update();
  }

  update() {
    this.removeAllTr();    

    this.entries.forEach(user => {
        const row = this.createRow();
        row.querySelector('.user img').src = `https://github.com/${user.login}.png`;
        row.querySelector('.user img').alt = `Imagem de ${user.name}`
        row.querySelector('.user p').textContent = user.name;
        row.querySelector('.user span').textContent = user.login;
        row.querySelector('.repositories').textContent = user.public_repos;
        row.querySelector('.followers').textContent = user.followers;
        
        this.tbody.append(row);
    })
  }

  createRow() {
    //o tr precisa ser criado direto pela DOM
    //o conteúdo eu armazeno em uma variável e o tr eu crio em outro
    const tr = document.createElement('tr');
    tr.innerHTML = `
                    <td class="user">
                        <img src="" alt="imagem do github">
                        <a href="https://github.com/" target="_blank">
                            <p>Joao</p>
                            <span>joao12</span>
                        </a>
                    </td>
                    <td class="repositories">
                        Repositórios
                    </td>
                    <td class="followers">
                        Seguidores
                    </td>
                    <td class="remove">
                        &times;
                    </td>
                `;
    return tr;
  }

  removeAllTr() {
    this.tbody.querySelectorAll("tr").forEach((el) => {
      el.remove();
    });
  }
}
