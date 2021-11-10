userGitHub = 'r-fael'
function getGithubProfileInfos() {
  let url = 'https://api.github.com/users/' + userGitHub
  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userLogin.textContent = data.login
      userImage.src = data.avatar_url
      userBio.textContent = data.bio
    })
}
getGithubProfileInfos()