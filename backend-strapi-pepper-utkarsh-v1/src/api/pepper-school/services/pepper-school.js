'use strict';

/**
 * pepper-school service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::pepper-school.pepper-school');
