        // PAGINA INDEX.HMTL
        
        // Carregar header e footer externos
        fetch('header.html')
            .then(response => response.text())
            .then(data => document.getElementById('header').innerHTML = data);

        fetch('footer.html')
            .then(response => response.text())
            .then(data => document.getElementById('footer').innerHTML = data);
            
         
        // PAGINA LOGIN.HMTL
        
function fazerLogin() {
    const email = document.getElementById('email').value.trim();
    const senha = document.getElementById('senha').value.trim();
    const erro = document.getElementById('erro');

    // Usuário e senha locais
    const usuarioCorreto = 'carlos';
    const senhaCorreta = '123456';

    if (email === usuarioCorreto && senha === senhaCorreta) {
        // Login correto, redireciona para o dashboard
        window.location.href = 'dashboard.html';
    } else {
        // Erro de login
        erro.textContent = 'E-mail ou senha inválidos.';
    }
}
        
        // PAGINA DASHBOARD.HMTL
     
    function updateDateTime() {
      const now = new Date();
      const date = now.toLocaleDateString('pt-BR');
      const time = now.toLocaleTimeString('pt-BR');
      document.getElementById('datetime').textContent = `${date} ${time}`;
    }
    setInterval(updateDateTime, 1000);
    updateDateTime();

    function logout() {
      window.location.href = 'index.html';
    }
        
        // PAGINA CLIENTE.HMTL
            
document.getElementById('clienteForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const cliente = {
    nome: document.getElementById('nome').value,
    endereco: document.getElementById('endereco').value,
    bairro: document.getElementById('bairro').value,
    cidade: document.getElementById('cidade').value,
    cnpj: document.getElementById('cnpj').value,
    telefone: document.getElementById('telefone').value,
    tipo: document.getElementById('tipo').value,
    numeroContrato: document.getElementById('numeroContrato').value,
    situacaoContrato: document.getElementById('situacaoContrato').value,
  };

  let clientes = JSON.parse(localStorage.getItem('clientes')) || [];
  clientes.push(cliente);
  localStorage.setItem('clientes', JSON.stringify(clientes));

  alert('Cadastro salvo com sucesso!');
  document.getElementById('clienteForm').reset();
});