// classe que irá conter a lógica dos dados
// como os dados serão estruturados

export class GithubSearch {
    static async search(username) {
        const endpoint = `https://api.github.com/users/${username}`;
        return await fetch(endpoint)
                        .then(data => data.json())
                        .then(data => ({
                            name: data.name,
                            login: data.login,
                            public_repos: data.public_repos,
                            followers: data.followers
                          }));
    }
}

export class GitFavorites {
  constructor(root) {
    this.root = document.querySelector(root);
    this.load();
    this.onadd();

    GithubSearch.search('matheusarb').then(response => console.log(response))
  }

  load() {
    this.entries = JSON.parse(localStorage.getItem('@github-favorites:')) || new Array();
  };

  delete(user) {
    const filteredEntries = this.entries
        .filter(entry => entry.login !== user.login)
    
    this.entries = filteredEntries;
    this.update();
  };
  

}

export class FavoritesView extends GitFavorites {
  constructor(root) {
    super(root);

    this.tbody = this.root.querySelector("table tbody");

    this.update();
    
  }

  onadd() {
    const addButon = this.root.querySelector(".search button");
    addButon.onclick = () => {
        const inputVal = this.root.querySelector(".search input").value;
        console.log(inputVal);
    }
  }

  update() {
    this.removeAllTr();    

    this.entries.forEach( user => {
        const row = this.createRow();

        row.querySelector('.user img').src = `https://github.com/${user.login}.png`;
        row.querySelector('.user img').alt = `Imagem de ${user.name}`;
        row.querySelector('.user p').textContent = user.name;
        row.querySelector('.user span').textContent = user.login;
        row.querySelector('.repositories').textContent = user.public_repos;
        row.querySelector('.followers').textContent = user.followers;
        
        row.querySelector('.remove').onclick = () => {
            const userConfirmation = confirm('Tem certeza que deseja excluir esse usuário?');
            if (userConfirmation) {
                this.delete(user);
            }
        }

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
