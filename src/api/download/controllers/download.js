'use strict';

/**
 * A set of functions called "actions" for `download`
 */

module.exports = {
  async incrementDownload(ctx,next){
    const {id} = (ctx.request.params)
    try{
      const data = await strapi.service("api::download.download").incrementDownload(id);
      ctx.body = data;
    }catch(err){
      ctx.badRequest("Increment download controller error",{moreDetail:err});
    }
  }
};
