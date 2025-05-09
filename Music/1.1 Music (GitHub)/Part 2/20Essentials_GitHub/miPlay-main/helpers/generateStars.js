const generateStars = (totalStars, selector, size, duration) => {
  const shadowLayers = [];

  for (let i = 0; i < totalStars; i++) {
    const x = Math.floor(Math.random() * 100);
    const y = Math.floor(Math.random() * 100);
    shadowLayers.push(`
      ${x}vw ${y}vh 0 #fff,
      ${x}vw ${y + 100}vh 0 #fff
    `);
  }

  const star = document.querySelector(selector);
  star.style.setProperty("--shadow-layer", shadowLayers.join(","));
  star.style.setProperty("--size", size);
  star.style.setProperty("--duration", duration);

};

export default generateStars;
