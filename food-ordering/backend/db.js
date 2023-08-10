const mongoose = require('mongoose');
const mongoURI = 'mongodb+srv://Food-Panda:Food-Panda@cluster0.ap2wb79.mongodb.net/Food-Panda?retryWrites=true&w=majority';

// const mongoDB = async () => {
//     try {
//         await mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });
//         console.log('Connected to MongoDB');

//         const fetch_data = mongoose.connection.db.collection('food-items');
//         // console.log("Fetch Data",fetch_data);
//         try {
//             const data = await fetch_data.find({}).toArray();
//             // console.log('Data variable contents:', data);
//             // console.log('Fetched data:',data);
//         } catch (err) {
//             console.error('Error fetching data:', err);
//         } finally {
//             mongoose.connection.close();
//         }
//     } catch (error) {
//         console.error('Error connecting to MongoDB:', error);
//     }
// };


const connectDB = async(url) => {
    return mongoose.connect(url,{ useNewUrlParser: true, useUnifiedTopology: true });
}

module.exports = {connectDB};
