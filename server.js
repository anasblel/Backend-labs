const env = require('./config/environment');  // Import environment variables

console.log(`App: ${env.app_name}`);        // This will print 'Event Manager' or your .env value
console.log(`Port: ${env.port}`);           // This will print '3000' or your .env value
console.log(`Environment: ${env.env}`);     // This will print 'development' or your .env value