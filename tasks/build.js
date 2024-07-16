const consola = require('consola');
const execa = require('execa');

(async () => {
  // Build Client for production
  try {
    consola.info('Building Client…');
    execa('npm', ['run', 'build', '-w', 'client']).then(() => consola.success('Client built.'));
  } catch (error) {
    consola.error(error);
  }
})();
