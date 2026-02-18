window.toggleOrderDetails = function (orderId) {
  const detailElement = document.getElementById(orderId);
  if (!detailElement) return;

  // Toggle logic
  if (
    detailElement.style.display === "none" ||
    detailElement.style.display === ""
  ) {
    detailElement.style.display = "block";
  } else {
    detailElement.style.display = "none";
  }
};

document.addEventListener("click", function (event) {
  const tabBtn = event.target.closest('[data-bs-toggle="pill"]');

  if (tabBtn) {
    event.preventDefault();

    // 1. Get the target ID from the button
    const targetId = tabBtn.getAttribute("data-bs-target").replace("#", "");
    const targetPane = document.getElementById(targetId);

    if (targetPane) {
      // 2. Reset all buttons in the sidebar
      const allBtns = document.querySelectorAll('[data-bs-toggle="pill"]');
      allBtns.forEach((btn) => {
        btn.classList.remove("active", "bg-indigo-600", "text-white");
        btn.classList.add("text-slate-600", "bg-transparent");
      });

      // 3. Highlight the clicked button
      tabBtn.classList.add("active", "bg-indigo-600", "text-white");
      tabBtn.classList.remove("text-slate-600", "bg-transparent");

      // 4. Hide all tab content panes
      const allPanes = document.querySelectorAll(".tab-pane");
      allPanes.forEach((pane) => {
        pane.style.display = "none";
        pane.classList.remove("show", "active");
      });

      // 5. Show the specific target pane
      targetPane.style.display = "block";
      targetPane.classList.add("show", "active");
    }
  }

  // --- B. FORM TOGGLE LOGIC ---
  // For "Edit Profile", "Security", and "Address Update"
  const toggleBtn = event.target.closest(
    "#edit-user-btn, #change-password-btn, #edit-info-btn",
  );

  if (toggleBtn) {
    event.preventDefault();
    let targetFormId = "";

    if (toggleBtn.id === "edit-user-btn") targetFormId = "edit-user-form";
    if (toggleBtn.id === "change-password-btn")
      targetFormId = "change-password-form";
    if (toggleBtn.id === "edit-info-btn") targetFormId = "edit-info-form";

    const targetForm = document.getElementById(targetFormId);
    if (targetForm) {
      const isHidden =
        targetForm.style.display === "none" || targetForm.style.display === "";
      targetForm.style.display = isHidden ? "block" : "none";
    }
  }
});

// 3. INITIALIZATION (Set default view)
document.addEventListener("DOMContentLoaded", function () {
  // Ensure the first tab is visible on load
  const activeTab = document.querySelector(".tab-pane.active");
  if (activeTab) {
    activeTab.style.display = "block";
  }
});
