import { login, recuperarSenha } from './auth.js';

// Lida com o envio do formulário de login
document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault();
  
  const email = document.getElementById('email').value;
  const senha = document.getElementById('password').value;
  const lembrar = document.getElementById('rememberMe').checked;

  login(email, senha, lembrar);
});

// Lida com recuperação de senha
document.getElementById('resetPassword').addEventListener('click', function(event) {
  event.preventDefault();
  
  const email = document.getElementById('email').value;
  
  if (email) {
    recuperarSenha(email);
  } else {
    alert('Por favor, preencha o campo de email para redefinir a senha.');
  }
});