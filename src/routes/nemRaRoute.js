import {addNewContact} from '../controllers/nemRaController';

const routes = (app) => {

  app.route('/contact')
  .get((req, res, next) => {
    console.log(`request from: ${req.originalUrl}`)
    console.log(`type: ${req.method}`)
    next();
  })
  .post(addNewContact);
}
export default routes;
