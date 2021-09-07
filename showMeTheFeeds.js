javascript:
(() => {
  let output = "Feeds:\n";

  const alternates = document.querySelectorAll('link[rel="alternate"]');
  alternates.forEach((item) => {
    if (item.title) {
        output += item.title + ': ';
    }
    output += item.href + "\n";
  });

  alert(output);
})();
