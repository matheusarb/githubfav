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