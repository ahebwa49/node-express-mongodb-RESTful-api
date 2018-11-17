export const routes = (app) => {

  app.route('/contact')
  .get((req, res, next) => {
    console.log(`request from: ${originalUrl}`)
    console.log(`type: ${method}`)
    next();
  });
}
