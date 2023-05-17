'use strict';

/**
 * A set of functions called "actions" for `view`
 */

module.exports = {
  async incrementView(ctx,next){
    const {id} = (ctx.request.params)
    try{
      const data = await strapi.service("api::view.view").incrementView(id);
      ctx.body = data;
    }catch(err){
      ctx.badRequest("Increment view controller error",{moreDetail:err});
    }
  }
};
