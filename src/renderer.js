const toggle = document.getElementById('checkbox');

toggle.checked = window.twentyTwentyIPC.initialState;

toggle.addEventListener('change', function () {
  window.twentyTwentyIPC.setEnabled(this.checked);
});
