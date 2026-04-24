const form = document.getElementById('createForm');
const message = document.getElementById('message');

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const data = {
    name: document.getElementById('name').value,
    email: document.getElementById('email').value,
    age: document.getElementById('age').value
  };

  try {
    await createUser(data);
    showSuccess('User created successfully!');
    form.reset();
  } catch (error) {
    showError('Error creating user: ' + error.message);
  }
});