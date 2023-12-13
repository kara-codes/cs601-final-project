function enableSubmit() {
    document.addEventListener('DOMContentLoaded', function () {
        var form = document.getElementById('trivia');
        var submitBtn = document.getElementById('submit');

        form.addEventListener('input', function () {
        var isValid = form.checkValidity();

        submitBtn.disabled = !isValid;
    });

    form.addEventListener('submit', function (event) {
      if (submitBtn.disabled) {
        event.preventDefault();
      }
    });
  });
}

function checkValidity() {
    isNameLengthValid = validateNameLength(1);
    if (isNameLengthValid === true) {
        return true;
    }
    else {
        return false;
    }
}

var elUserName = document.getElementById('username');

function validateNameLength(minLength) {
    var elMsg = document.getElementById('userFeedback1');
    if (elUserName.value.length < minLength) {
        elMsg.textContent = "Error! Name must be 1 or more characters.";
        return false;
    }
    else {
        elMsg.innerHTML = "";
        return true;
    }
}

elUserName.addEventListener('blur', function() {
    validateNameLength(1);
}, false);

enableSubmit();
