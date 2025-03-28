document.addEventListener('DOMContentLoaded', function() {
  // Seleciona o botão do menu hambúrguer e o menu móvel
  const menuToggle = document.querySelector('.elementor-menu-toggle');
  const mobileMenu = document.querySelector('.elementor-nav-menu--dropdown');
  
  // Adiciona evento de clique ao botão do menu
  if (menuToggle) {
      menuToggle.addEventListener('click', function() {
          // Alterna a classe 'elementor-active' no botão
          this.classList.toggle('elementor-active');
          
          // Atualiza o atributo aria-expanded
          const expanded = this.getAttribute('aria-expanded') === 'true' || false;
          this.setAttribute('aria-expanded', !expanded);
          
          // Alterna a visibilidade do menu móvel
          if (mobileMenu) {
              mobileMenu.classList.toggle('elementor-menu-dropdown-open');
              mobileMenu.setAttribute('aria-hidden', expanded);
          }
      });
  }
  
  // Fecha o menu quando um item é clicado
  const mobileMenuItems = document.querySelectorAll('.elementor-nav-menu--dropdown .elementor-item');
  mobileMenuItems.forEach(item => {
      item.addEventListener('click', function() {
          if (menuToggle) {
              menuToggle.classList.remove('elementor-active');
              menuToggle.setAttribute('aria-expanded', 'false');
          }
          
          if (mobileMenu) {
              mobileMenu.classList.remove('elementor-menu-dropdown-open');
              mobileMenu.setAttribute('aria-hidden', 'true');
          }
      });
  });
});
