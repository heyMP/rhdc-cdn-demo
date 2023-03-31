Promise.all([
  import('http://localhost:8080/cdn/node_modules/rh-header-entry.js'),
  import('http://localhost:8080/cdn/node_modules/rh-footer-entry.js')
]).then(() => {
    document.querySelector('rh-header').addEventListener('click', e => alert('We are tracking your clicks now!'));
  });
