// fetch('https://api.github.com/users/Dims310/repos')
//     .then((result) => result.json())
//     .then((data) => console.log(data))

const repos = "https://api.github.com/users/Dims310/repos"

async function getRepos(){
    const api = await fetch(repos)
    const data = await api.json()
    
    Object.keys(data).forEach(function (i){
        var dataCardRepos = `
            <div class="col">
                <div class="card h-100">
                    <div class="card-body body">
                        <h5 class="card-title">${data[i].name}</h5>
                        <p class="card-text">${data[i].description}.</p>
                    </div>
                    <div class="card-footer footer">
                        <a href="${data[i].html_url}" class="btn btn-primary">Go to repository <i class="ri-external-link-line"></i></a>
                    </div>
                </div>
            </div>
        `

        document.getElementById('reposCard').innerHTML += dataCardRepos
    })
}

getRepos()