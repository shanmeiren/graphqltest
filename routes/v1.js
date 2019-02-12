'use strict';

import koaRouter from 'koa-router'; // koa-router@next
import User from '../controller/v1/user'

let router = new koaRouter({
    prefix: '/v1'
});


router.get('/user/:user_id', User.getInfoById);
router.post('/user/adduser', User.addUser);
router.post('/user/updateuser/:user_id', User.updateUserById);
router.delete('/user/deluser/:user_id', User.deleteUserById);

 
export default router