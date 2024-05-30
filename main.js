document.getElementById('disableAnim').onclick = function() {
  const body = document.getElementById('about');
  body.classList.toggle('disableAnimation');
  console.log(this.innerText);
  if (this.innerText === 'Enable Animations') {
    this.innerText = 'Disable Animations';
  } else {
    this.innerText = 'Enable Animations'
  }
}
