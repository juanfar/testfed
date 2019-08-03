function getUsers(user) {
  return fetch(`https://jsonplaceholder.typicode.com/users/${user}`)
    .then(response => response.json())
    .then(data => data.name)
    .catch(error => console.error(error))
}

function getPosts(userId) {
  return fetch(`https://jsonplaceholder.typicode.com/posts/?userId=${userId}`)
  .then(response => response.json())
  .then(text => text[0].body)
  .catch(error => console.error(error))
}

export { getPosts, getUsers };