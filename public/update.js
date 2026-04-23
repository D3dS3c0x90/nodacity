const form = document.getElementById('updateForm');
const message = document.getElementById('message');

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const id = document.getElementById('id').value;

  const data = {
    name: document.getElementById('name').value,
    email: document.getElementById('email').value,
    age: document.getElementById('age').value
  };

  try {
    await updateUser(id, data);
    message.innerText = '✏️ Updated successfully';
  } catch (error) {
    message.innerText = '❌ Error updating';
  }
});