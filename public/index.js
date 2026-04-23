const API = '/users';
console.log("API file loaded");
// 🔵 CREATE
async function createUser(data) {
  const res = await fetch(API, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  });

  return res.json();
}

// 🟢 GET ALL
async function getUsers() {
  const res = await fetch(API);
  return res.json();
}

// 🟡 UPDATE
async function updateUser(id, data) {
  const res = await fetch(`${API}/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  });

  return res.json();
}

// 🔴 DELETE
async function deleteUser(id) {
  const res = await fetch(`${API}/${id}`, {
    method: 'DELETE'
  });

  return res.text();
}