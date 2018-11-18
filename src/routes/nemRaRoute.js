import {addNewContact, getContacts} from '../controllers/nemRaController';

const routes = (app) => {

  app.route('/contact')
  .get((req, res, next) => {
    console.log(`request from: ${req.originalUrl}`)
    console.log(`type: ${req.method}`)
    next();
  }, getContacts)
  .post(addNewContact);
}
export default routes;
