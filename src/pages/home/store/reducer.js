import { fromJS } from 'immutable';//以防不小心改变state的数据
import * as contans from './contans';
const defaultValue = fromJS({
	listData:[],
	topicData:[],
	recomList:[],
	pageList:1,
	showBack:false,
})
export default (state=defaultValue, action) => {
	switch (action.type) {
		case contans.ADD_LIST_DATA:
			return state.merge({
				'listData': state.get('listData').concat(action.data),
				'pageList': action.page
			});
		case contans.SET_HOME_DATA:
			return state.merge({
				'recomList':fromJS(action.data.recomList),
				'listData': fromJS(action.data.listData),
				'topicData': fromJS(action.data.topicData),
			});
		case contans.CHANGE_SHOW:
			return state.set('showBack',action.flag);
		default:
			return state
	}
}