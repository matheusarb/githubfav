// classe que irá conter a lógica dos dados
// como os dados serão estruturados

export class GitFavorites {
  constructor(root) {
    this.root = document.querySelector(root);

    this.update();
  }
}

export class GitFavoritesView extends GitFavorites {
  constructor(root) {
    super(root);
  }

  update() {
    this.removeAllTr();
    
    const entries = [
        {
            login: "matheusribeiroa",
            name: "Matheus Ribeiro",
            public_repos: "31",
            followers: "189"
        },
        {
            login: "joao123",
            naem: "Joao da Silva",
            public_repos: "31",
            followers: "189"
        }
    ]
    entries.forEach(user => console.log(user))
    
  }

  createRow() {
    //o tr precisa ser criado direto pela DOM
    //o conteúdo eu armazeno em uma variável e o tr eu crio em outro
    const tr = document.createElement('tr');
    tr.innerHTML(`
                    <td class="user">
                        <img src="" alt="imagem do github">
                        <a href="https://github.com/joao12" target="_blank">
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
                `);
  }

  removeAllTr() {
    const tbody = this.root.querySelector("table tbody");

    tbody.querySelectorAll("tr").forEach((el) => {
      el.remove();
    });
  }
}
