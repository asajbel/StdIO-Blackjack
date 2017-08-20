function print (text, where = "output") {
  document.getElementById(where).innerHTML += "<p>" + text + "</p>";
}

function read(e, value, id) {
  if (e.keyCode === 13) {
    e.preventDefault();
    print(value);
    document.getElementById(id).value = '';
  }
}
