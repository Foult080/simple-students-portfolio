// константа с элементов всплывающих сообщений
const alertPlaceholder = document.getElementById('liveAlertPlaceholder');

/**
 * Добавить ошибку с блок
 * @param {String} message - сообщение
 * @param {String} type - тип
 */
function appendAlert(message, type) {
  const wrapper = document.createElement('div');
  wrapper.innerHTML = [
    `<div class="alert alert-${type} alert-dismissible" role="alert">`,
    `   <div>${message}</div>`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    '</div>',
  ].join('');

  alertPlaceholder.append(wrapper);
}

/**
 * Метод для очистки формы
 */
function clearForm() {
  debugger;
  document.getElementById('inputName').value = '';
  document.getElementById('inputContact').value = '';
  document.getElementById('inputText').value = '';
}

/**
 * Отправка данных на сервер
 */
async function onSubmit() {
  const name = document.getElementById('inputName').value;
  const contacts = document.getElementById('inputContact').value;
  const msg = document.getElementById('inputText').value;
  const request = await fetch('/api/inform-user', {
    method: 'POST',
    headers: { 'Content-type': 'application/json' },
    body: JSON.stringify({ name, contacts, msg }),
  });
  const result = await request.json();
  //TODO: сделать алерт для ошибки
  appendAlert(result.msg, 'success');
  clearForm();
}
