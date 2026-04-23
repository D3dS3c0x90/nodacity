const table = document.getElementById('userTable');
console.log("Hello Get.js");

async function loadUsers() {
  try {
    const users = await getUsers(); // from api.js
    console.log("Hello Get.js");
    table.innerHTML = ''; // clear table

    users.forEach(user => {
      const row = `
        <tr>
          <td>${user.name}</td>
          <td>${user.email}</td>
          <td>${user.age}</td>
        </tr>
      `;

      table.innerHTML += row;
    });

  } catch (error) {
    table.innerHTML = `<tr><td colspan="3">❌ Error loading users</td></tr>`;
  }
}

// run when page loads
loadUsers();