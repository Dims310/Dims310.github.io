// fetch('https://api.github.com/users/Dims310/repos')
//     .then((result) => result.json())
//     .then((data) => console.log(data))

const repos = "https://api.github.com/users/Dims310/repos"

async function getRepos(){
    const api = await fetch(repos)
    const data = await api.json()
    
    for (let i=1; i < Object.keys(data).length; i++){
        if (data[i].description !== null){
            var dataCardRepos = `
                <div class="col-lg-4 mt-3 reposCard">
                    <div class="card h-100">
                        <div class="card-body body">
                            <h5 class="card-title">${data[i].name}</h5>
                            <p class="card-text">${data[i].description}.</p>
                        </div>
                        <div class="card-footer">
                            <a href="${data[i].html_url}"><button class="btn">Go to repository <i class="ri-external-link-line"></i></button></a>
                        </div>
                    </div>
                </div>
            `

            document.getElementById('reposCard').innerHTML += dataCardRepos
        }
    }
}

getRepos()

function darkMode() {
   var element = document.body;
   element.classList.toggle("dark-mode");
}
