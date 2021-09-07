javascript:
(async () => {
  try {
    await navigator.clipboard.writeText(document.cookie);
    alert('Cookiedaten in die Zwischenablage kopiert.')
  } catch (err) {
    console.error('Failed to copy: ', err);
  }
})();
