const details = document.querySelectorAll('details');

details.forEach(detail => {
  detail.addEventListener('toggle', () => {
    if (detail.open) {
      details.forEach(otherDetail => {
        if (otherDetail.open && otherDetail !== detail) {
          otherDetail.open = false;
        }
      });
    }
  });
});
