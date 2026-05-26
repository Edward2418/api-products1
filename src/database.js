import mongoose from 'mongoose';

const URI = 'mongodb://Edward2418:123@ac-frzfahh-shard-00-00.ypaebv6.mongodb.net:27017,ac-frzfahh-shard-00-01.ypaebv6.mongodb.net:27017,ac-frzfahh-shard-00-02.ypaebv6.mongodb.net:27017/?ssl=true&replicaSet=atlas-71zmt8-shard-0&authSource=admin&appName=Cluster0';

mongoose.connect(URI)
	.then(() => console.log('Connected to MongoDB'))
	.catch((error) => console.log('Error connecting to MongoDB', error.message));

export default mongoose;