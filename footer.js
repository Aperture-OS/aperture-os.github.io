document.addEventListener("DOMContentLoaded", () => {
  const footerHTML = `
    <footer>
      <div class="footer-content">
        <img class="footer-logo" src="assets/icons/logo.svg" alt="ApertureOS Logo" />
        <div class="footer-links">
          <a href="index.html#home">Home</a>
          <a href="index.html#about">About</a>
          <a href="download.html">Download</a>
          <a href="index.html#contact">Contact</a>
          <a href="tos.html">Terms Of Service</a>
          <a href="privacy.html">Privacy Statement</a>
        </div>
        <div id="copyright" align="center" class=copyright>
          &copy; 2025 - 2025 ApertureOS - All Rights Reserved.
        </div>
      </div>
    </footer>
  `;

  document.body.insertAdjacentHTML("beforeend", footerHTML);

  // Dynamic year update
  const copyrightElement = document.getElementById("copyright");
  copyrightElement.innerHTML =
    "&copy; 2025 - " + new Date().getFullYear() + " ApertureOS - All Rights Reserved.";
});
