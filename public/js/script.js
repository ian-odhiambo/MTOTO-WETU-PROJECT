// Set current date
      const currentDate = new Date();
      const options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      };
      document.getElementById("current-date").textContent =
        currentDate.toLocaleDateString("en-US", options);

      // Toggle sidebar
      const sidebar = document.getElementById("sidebar");
      const toggleButton = document.getElementById("toggle-sidebar");
      const mainContent = document.querySelector("main");

      toggleButton.addEventListener("click", () => {
        sidebar.classList.toggle("sidebar-expanded");
        sidebar.classList.toggle("sidebar-collapsed");

        if (sidebar.classList.contains("sidebar-collapsed")) {
          mainContent.classList.remove("lg:ml-64");
          mainContent.classList.add("lg:ml-20");
          toggleButton.innerHTML = '<i class="fas fa-chevron-right"></i>';
        } else {
          mainContent.classList.remove("lg:ml-20");
          mainContent.classList.add("lg:ml-64");
          toggleButton.innerHTML = '<i class="fas fa-chevron-left"></i>';
        }
      });

      // Handle dropdown menus
      document.querySelectorAll(".nav-dropdown").forEach((button) => {
        button.addEventListener("click", () => {
          const dropdownContent = button.nextElementSibling;
          const icon = button.querySelector(".fa-chevron-down");

          dropdownContent.classList.toggle("hidden");
          icon.classList.toggle("rotate-180");
        });
      });

      // Simulate progress animation
      setTimeout(() => {
        document.querySelectorAll(".progress-bar-fill").forEach((bar) => {
          const targetWidth = bar.style.width;
          bar.style.width = "0%";

          setTimeout(() => {
            bar.style.width = targetWidth;
          }, 300);
        });
      }, 500);