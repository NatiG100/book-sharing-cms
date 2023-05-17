'use strict';

/**
 * view service
 */

module.exports = () => ({
    incrementView:async(entityId)=>{
        try{
            const result = await strapi.entityService.findOne('api::book.book',entityId,{
                fields:["view"]
            });
            if(!result){
                return new Error("Not found");
            }
            const updated = await strapi.entityService.update('api::book.book',entityId,{
                data:{
                    view:result.view+1,
                }
            })
            return true;
        }catch(err){
            return err;
        }
    }
});
