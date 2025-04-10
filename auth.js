// Importa o Firebase
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword, sendPasswordResetEmail } from "firebase/auth";

// Configuração do Firebase
const firebaseConfig = {
  apiKey: "AIzaSyADb2Bhv1M9553uBxdenXYygz_jedpkIw8",
  authDomain: "solarpmoc.firebaseapp.com",
  projectId: "solarpmoc",
  storageBucket: "solarpmoc.appspot.com",
  messagingSenderId: "1063394034726",
  appId: "1:1063394034726:web:d9f758971a224e65ca52e7"
};

// Inicializa o Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Variáveis de controle
let tentativasRestantes = 3;

// Função de login
export function login(email, senha, lembrar) {
  signInWithEmailAndPassword(auth, email, senha)
    .then((userCredential) => {
      const user = userCredential.user;
      
      if (lembrar) {
        localStorage.setItem('user', JSON.stringify(user));
      } else {
        sessionStorage.setItem('user', JSON.stringify(user));
      }

      // Redirecionar para painel após login
      window.location.href = "/dashboard.html"; // ajuste para onde quer ir após login
    })
    .catch((error) => {
      tentativasRestantes--;

      alert(`Erro no login: ${error.message}\nTentativas restantes: ${tentativasRestantes}`);

      if (tentativasRestantes <= 0) {
        alert("Número máximo de tentativas excedido. Tente novamente mais tarde.");
        document.getElementById('loginButton').disabled = true; // bloqueia botão de login
      }
    });
}

// Função para recuperação de senha
export function recuperarSenha(email) {
  sendPasswordResetEmail(auth, email)
    .then(() => {
      alert("Email de recuperação enviado! Verifique sua caixa de entrada.");
    })
    .catch((error) => {
      alert(`Erro ao enviar email de recuperação: ${error.message}`);
    });
}

// Verifica se usuário já está logado
export function verificarLogin() {
  const user = JSON.parse(localStorage.getItem('user') || sessionStorage.getItem('user'));
  return user ? true : false;
}

// Função para logout
export function logout() {
  localStorage.removeItem('user');
  sessionStorage.removeItem('user');
  window.location.href = "/login.html"; // voltar para página de login
}