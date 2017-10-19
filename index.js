document.querySelector('form').addEventListener('change', ev => {
  const color = ev.target.value;
  const div = document.querySelector('.change');
  div.className = `change ${color}`;
});

function changeButton(node) {
  node.checked = true;
  var event = document.createEvent('HTMLEvents');
  event.initEvent('change', true, false);
  node.dispatchEvent(event);
}

const changeFunction = setInterval(function() {
  const radioButtons = document.querySelectorAll('form input');
  const randomButton =
    radioButtons[Math.floor(Math.random() * radioButtons.length)];
  changeButton(randomButton);
}, 1000);

setTimeout(() => clearInterval(changeFunction), 10000);
