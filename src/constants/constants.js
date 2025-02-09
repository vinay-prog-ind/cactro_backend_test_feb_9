require('dotenv').config();

module.exports = {
    MAX_CACHE_SIZE: 10, 
    REDIS_CONFIG: {
      url: process.env.REDIS_URL || 'redis://localhost:6379', 
    },
};