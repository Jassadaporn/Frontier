const admin = require('firebase-admin');
const serviceAccount = require('../../serviceAccountKey.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  storageBucket: 'giraffepark-bdb1d.appspot.com'
});

const bucket = admin.storage().bucket();

module.exports = bucket;
