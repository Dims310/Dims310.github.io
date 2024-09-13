$(document).ready(function() {
    const apiRepository = "https://api.github.com/users/Dims310/repos";

    $.getJSON( apiRepository, function() {})
        .done(function(data) {
            console.log(data);
            
            
            for (let i=2; i < data.length; i+=2) {

                var dataCardRepos = `
                    <div class="col-lg-4 mt-3 reposCard">
                        <div class="card h-100">
                            <div class="card-header">
                                ${data[i].language}
                            </div>
                            <div class="card-body">
                                <h5 class="card-title">${data[i].name}</h5>
                                <p class="card-text">${data[i].description}.</p>
                            </div>
                            <div class="card-footer">
                                <a href="${data[i].html_url}"><button class="btn"><span id="linked-repo">Go to repository</span> <i class="ri-external-link-line"></i></button></a>
                            </div>
                        </div>
                    </div>
                `

                $("#reposCard").append(dataCardRepos);
            }
        })
        .fail(function() {
            console.log("Error, cannot reach the repositories");
        })
})

function darkMode() {
   var element = document.body;
   element.classList.toggle("dark-mode");
}
