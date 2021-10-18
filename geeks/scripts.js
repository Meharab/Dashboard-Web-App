document.getElementById("login").onclick = function () {
    location.href = "./dashboard/dashboard.html";
};

$(document).ready(function() { $('#loginModal').modal('show');
  $(function () {
    $('[data-toggle="tooltip"]').tooltip()
  })
});