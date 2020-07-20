const state = [];
const button = document.getElementById('button');
const modal = document.getElementById('modal');
const nameEmail = document.getElementById('name-email');

button.addEventListener('click', () => {
  modal.style.display = 'block';
});

document.getElementById('form').addEventListener('submit', event => {
  event.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;

  state.push({ name, email });

  setUser(state);
});

const setUser = state => {
  let element = document.createElement('div');
  let but = document.createElement('div');

  state.forEach(user => {
    element.innerHTML = `<div>Name: ${user.name}</div><div>Email: ${user.email}</div>`;

    modal.style.display = 'none';
    nameEmail.appendChild(element);
    nameEmail.style.display = 'block';

    but.innerHTML = `<button>Reset</button>`;
    but.id = 'reset';
    nameEmail.appendChild(but);

    document.getElementById('reset').addEventListener('click', () => {
      window.location.reload();
    });
  });
};
