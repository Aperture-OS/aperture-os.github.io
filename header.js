// Header HTML injection
document.addEventListener('DOMContentLoaded', () => {
  const headerHTML = `
    <header>
      <nav>
        <img src="assets/icons/logo.svg" alt="ApertureOS Logo" class="logo" />
        
        <!-- Mobile Menu Toggle -->
        <input type="checkbox" id="menu-toggle" class="menu-checkbox" />
        <label for="menu-toggle" class="menu-icon-label">
          <img src="assets/icons/hamburger.svg" alt="Menu" class="menu-icon" />
        </label>

        <div class="nav-links">
          <label for="menu-toggle" class="close-icon">
            <img src="assets/icons/x.svg" alt="Close" class="close-icon-img" />
          </label>
          <ul>
            <li><a href="index.html#home">Home</a></li>
            <li><a href="index.html#about">About</a></li>
            <li><a href="index.html#features">Features</a></li>
            <li><a href="download.html">Download</a></li>
            <li><a href="index.html#contact">Contact</a></li>
          </ul>
        </div>

        <ul class="desktop-nav">
          <li><a href="index.html#home">Home</a></li>
          <li><a href="index.html#about">About</a></li>
          <li><a href="index.html#features">Features</a></li>
          <li><a href="download.html">Download</a></li>
          <li><a href="index.html#contact">Contact</a></li>
        </ul>

      </nav>
    </header>
  `;

  document.body.insertAdjacentHTML('afterbegin', headerHTML);
});
