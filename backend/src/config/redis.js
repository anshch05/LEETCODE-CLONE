const { createClient } = require('redis')

const redisClient = createClient({
    username: 'default',
    password: process.env.REDIS_PASS,
    socket: {
        host: 'redis-11841.crce276.ap-south-1-3.ec2.cloud.redislabs.com',
        port: 11841
    }
});

module.exports=redisClient