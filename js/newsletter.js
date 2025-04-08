// Newsletter functionality for design_mode
document.addEventListener("DOMContentLoaded", () => {
  const newsletterForm = document.querySelector(".newsletter-form");

  if (newsletterForm) {
    newsletterForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const emailInput = newsletterForm.querySelector(".newsletter-input");
      const email = emailInput.value.trim();

      if (!email) {
        showMessage("Please enter your email address", "error");
        return;
      }

      if (!isValidEmail(email)) {
        showMessage("Please enter a valid email address", "error");
        return;
      }

      // In design_mode, we'll simulate a successful subscription
      // Show loading state
      const submitButton = newsletterForm.querySelector(
        'button[type="submit"]',
      );
      const originalButtonText = submitButton.textContent;
      submitButton.textContent = "Sending...";
      submitButton.disabled = true;

      // Simulate API call with a timeout
      setTimeout(() => {
        // Store email in localStorage for demo purposes
        const subscribers = JSON.parse(
          localStorage.getItem("newsletter_subscribers") || "[]",
        );
        subscribers.push({
          email,
          subscribedAt: new Date().toISOString(),
        });
        localStorage.setItem(
          "newsletter_subscribers",
          JSON.stringify(subscribers),
        );

        // Show success message
        showMessage("Thank you for subscribing!", "success");
        emailInput.value = "";

        // Reset button
        submitButton.textContent = originalButtonText;
        submitButton.disabled = false;

        // Disable the form after successful subscription
        newsletterForm.reset();
        newsletterForm.classList.add("subscribed");
      }, 1000);
    });
  }

  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  function showMessage(message, type) {
    // Remove any existing message
    const existingMessage = document.querySelector(".newsletter-message");
    if (existingMessage) {
      existingMessage.remove();
    }

    // Create new message element
    const messageElement = document.createElement("div");
    messageElement.className = `newsletter-message ${type}`;
    messageElement.textContent = message;

    // Add message to the form
    const form = document.querySelector(".newsletter-form");
    form.appendChild(messageElement);

    // Remove message after 3 seconds
    setTimeout(() => {
      messageElement.remove();
    }, 3000);
  }
});
