  // DOM Elements
  const modal = document.getElementById("codeModal");
  const codeContent = document.getElementById("codeContent");
  const languageButtons = document.querySelector(".language-options");
  const copyBtn = document.querySelector(".copy-btn");
  const closeBtn = document.querySelector(".close-btn");
  const showCodeButtons = document.querySelectorAll(".show-code-btn");

  // Show Modal with Code
  showCodeButtons.forEach((btn) => {
      btn.addEventListener("click", () => {
          const project = btn.getAttribute("data-project");
          const languages = Object.keys(codeSnippets[project]);
          const firstLang = languages[0];

          // Populate language buttons
          languageButtons.innerHTML = languages
              .map((lang) => `<button class="lang-btn" data-lang="${lang}">${lang.toUpperCase()}</button>`)
              .join("");

          // Show first language code by default
          codeContent.textContent = codeSnippets[project][firstLang];
          hljs.highlightElement(codeContent);
          modal.style.display = "block";

          // Language Button Click
          document.querySelectorAll(".lang-btn").forEach((btn) => {
              btn.addEventListener("click", () => {
                  const lang = btn.getAttribute("data-lang");
                  codeContent.textContent = codeSnippets[project][lang];
                  hljs.highlightElement(codeContent);
              });
          });
      });
  });

  // Close Modal
  closeBtn.addEventListener("click", () => {
      modal.style.display = "none";
  });

  // Copy Code to clipboard 
  copyBtn.addEventListener("click", () => {
      navigator.clipboard.writeText(codeContent.textContent).then(() => {
          alert("Code copied to clipboard!");
      });
  });

  // Highlight.js for Syntax Highlighting
  hljs.configure({ tabReplace: "    " });
  

  // -------------Animation, Hover Effects For Icons and Buttons-------------

  $(document).ready(function () {
    // Add animations on scroll
    $(window).scroll(function () {
        if ($(this).scrollTop() > 50) {
            $('header').addClass('bg-dark');
        } else {
            $('header').removeClass('bg-dark');
        }
    });

    // Hover effects for social icons
    $('.btn i').hover(function () {
        $(this).css('transform', 'scale(1.1)');
    }, function () {
        $(this).css('transform', 'scale(1)');
    });

    // Button hover effect
    $('button').hover(function () {
        $(this).css('background-color', '#8927e6').css('transform', 'translateY(-3px)');
    }, function () {
        $(this).css('background-color', '#9333ea').css('transform', 'translateY(0)');
    });
});

// -------------------------The End Animation and Effects -------------------------