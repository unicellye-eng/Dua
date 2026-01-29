// boot.js - force open "أدعية بالاسم" list on first load
(() => {
  try {
    if (!location.hash) {
      // Use the routing format expected by app.js
      location.replace(location.pathname + location.search + '#list-name-duas');
    }
  } catch (e) {}
})();
