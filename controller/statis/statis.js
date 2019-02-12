'use strict'


class Statis {
	constructor(){

	}
	async apiCount(req, res, next){
		const date = req.params.date;
		if (!date) {
			console.log('param not valid')
			res.send({
				status: 0,
				type: 'ERROR_PARAMS',
				message: 'param not valid'
			})
			return;
		}
		try{
			const count = 10;
			res.send({
				status: 1,
				count,
			})
		}catch(err){
			console.log('error');
			res.send({
				status: 0,
				type: 'ERROR_GET_TODAY_API_COUNT',
				message: 'error'
			})
		}
	}
}

export default new Statis()