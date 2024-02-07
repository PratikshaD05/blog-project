let login = localStorage.getItem("login");
let userDetails = null;
if (login === null) {
  window.location.replace("../html/login1.html");
} else {
  userDetails = localStorage.getItem("users");
  userDetails = JSON.parse(userDetails);
  userDetails = userDetails[login];
  document.querySelector("#welcome-text").innerHTML = `Welcome, <b>${
    userDetails.fullName.split(" ")[0]
  }</b>`;
}

let logoutBtn = document.querySelector("#logout");
logoutBtn.addEventListener("click", () => {
  logoutBtn.addEventListener("click",()=>{
        Swal.fire({
            title: "Are you sure?",
            text: "Are you sure to logout",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, logout it!"
          }).then((result) => {
            if (result.isConfirmed) {
                localStorage.removeItem("login");
                window.location.replace("../html/login1.html");
          }
    });
    })
});
