function copyAddress(addressId, feedbackId) {
  const address = document.getElementById(addressId)?.textContent;
  const feedback = document.getElementById(feedbackId);

  if (!feedback) {
    alert("Feedback element not found: " + feedbackId);
    return;
  }

  navigator.clipboard.writeText(address).then(() => {
    feedback.style.display = "block";
    feedback.textContent = "Copied!";
    setTimeout(() => {
      feedback.style.display = "none";
    }, 2000);
  }).catch(err => {
    alert("Failed to copy address: " + err);
  });
}
