'use strict';

import BaseComponent from '../../prototype/baseComponent'

class User extends BaseComponent {
	constructor(){
		super()
	}
    getInfoById(ctx, next){
        const user_id = ctx.params.user_id;
        if (!user_id || !Number(user_id)) {
            console.log('user id blank')
            ctx.body = JSON.stringify({
                status: 0,
                type: 'GET_USER_INFO_FAIELD',
                message: 'user id blank or not number',
            })
            return
        }
        try{
            const userinfo = JSON.stringify({'username':'yan','email':'test@yan.com'});
            ctx.body = userinfo;
        }catch(err){
            console.log('run time error', err);
            ctx.body = JSON.stringify({
                status: 0,
                type: 'GET_USER_INFO_FAIELD',
                message: 'run time error',
            })
        }
    }
    addUser(ctx, next){
        const user_id = ctx.params.user_id;
        if (!user_id || !Number(user_id)) {
            console.log('user id blank')
            ctx.body = JSON.stringify({
                status: 0,
                type: 'ADD_USER_INFO_FAIELD',
                message: 'user id blank',
            })
            return
        }
        try{
            const userinfo = JSON.stringify({'username':'yan','email':'test@yan.com'});
            res.send(userinfo)
        }catch(err){
            console.log('run time error', err);
            ctx.body = JSON.stringify({
                status: 0,
                type: 'ADD_USER_INFO_FAIELD',
                message: 'run time error',
            })
        }
    }
    updateUserById(ctx, next){
        const user_id = ctx.params.user_id;
        if (!user_id || !Number(user_id)) {
            console.log('user id blank')
            ctx.body = JSON.stringify({
                status: 0,
                type: 'UPD_USER_INFO_FAIELD',
                message: 'user id blank',
            })
            return
        }
        try{
            const userinfo = JSON.stringify({'username':'yan','email':'test2@yan.com'});
            res.send(userinfo)
        }catch(err){
            console.log('run time error', err);
            ctx.body = JSON.stringify({
                status: 0,
                type: 'UPD_USER_INFO_FAIELD',
                message: 'run time error',
            })
        }
    }
    deleteUserById(ctx, next){
        const user_id = ctx.params.user_id;
        if (!user_id || !Number(user_id)) {
            console.log('user id blank')
            ctx.body = JSON.stringify({
                status: 0,
                type: 'DEL_USER_INFO_FAIELD',
                message: 'user id blank',
            })
            return
        }
        try{
            const userinfo = JSON.stringify({'info':"0"});
            res.send(userinfo)
        }catch(err){
            console.log('run time error', err);
            ctx.body = JSON.stringify({
                status: 0,
                type: 'DEL_USER_INFO_FAIELD',
                message: 'run time error',
            })
        }
    }
}

export default new User()