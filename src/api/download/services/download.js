'use strict';

/**
 * download service
 */

module.exports = () => ({
    incrementDownload:async(entityId)=>{
        try{
            const result = await strapi.entityService.findOne('api::book.book',entityId,{
                fields:["downloads"]
            });
            if(!result){
                return new Error("Not found");
            }
            const updated = await strapi.entityService.update('api::book.book',entityId,{
                data:{
                    downloads:result.downloads+1,
                }
            })
            return true;
        }catch(err){
            return err;
        }
    }
});
