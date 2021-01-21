import dotenv from 'dotenv';

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

const envFound = dotenv.config();

if (!envFound) {
	throw new Error(`⚠ Couldn't find .env file. Please check the .env.example and create your own copy of that file. ⚠`);
}

export default {
	/**
	 * @desc PORT
	 * @type {Number}
	 **/
	port: parseInt(process.env.PORT, 10),


};
