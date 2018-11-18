import {addNewContact, getContacts, getContactWithId, updateContact} from '../controllers/nemRaController';

const routes = (app) => {

  app.route('/contact')
  .get((req, res, next) => {
    console.log(`request from: ${req.originalUrl}`)
    console.log(`type: ${req.method}`)
    next();
  }, getContacts)
  .post(addNewContact);

 app.route('/contact/:contactId')
 .get(getContactWithId)
}
export default routes;
