const Joi = require('joi');

const ImageHeadersSchema = Joi.object({
    'content-type': Joi.string().valid('image/jpeg', 'image/jpg', 'image/png', 'image/svg+xml').required(),
}).unknown();

module.exports = { ImageHeadersSchema };
