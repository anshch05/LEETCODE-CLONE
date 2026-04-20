const redisClient = require('../config/redis')

const submitRateLimiter = async(req,res,next) => {
    const userId = req.ans._id
    const redisKey = `submit_cooldown:${userId}`
    try {
        const exist = await redisClient.exists(redisKey)

        if(exist) {
            return res.status(429).json({
                error:"Please wait 10 sec for submitting again"
            })
        }

        await redisClient.set(redisKey,'cooldown_active',{
            EX:10,  //expire after 10sec
            NX:true  // only set if not exist 
        })

        next()
        
    } catch (error) {
        console.log("Rate Limiter error",error);
        res.status(500).json({error:"Internal server error"})
    }
}

module.exports = submitRateLimiter