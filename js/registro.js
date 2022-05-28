let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

class Usuario {
  constructor(nombre, email, password, rol) {
    this.nombre = nombre;
    this.email = email;
    this.password = password;
    this.rol = rol;
  }
}

const registrarUsuario = function (e) {
  e.preventDefault();
  console.log("submit");

  let nombre = document.getElementById("text_nombre").value;
  let correo = document.getElementById("text_email").value;
  let password = document.getElementById("text_password").value;
  let password2 = document.getElementById("text_password2").value;

  //   comparar contraseñas
  if (password !== password2) {
    return alert("No coinciden las contraseñas");
  }
  usuarios.push(new Usuario(nombre, correo, password));
  localStorage.setItem("usuarios", JSON.stringify(usuarios));
  document.getElementById("formulario").reset();
  alert("Usuario registrado con exito");
  document.getElementById("text_nombre").focus;
  location.replace("../index.html");
};

document
  .getElementById("formulario")
  .addEventListener("submit", registrarUsuario);
