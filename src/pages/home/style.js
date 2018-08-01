import styled from 'styled-components'
export const HomeWarp = styled.div`
	overflow:hidden;
	margin: 0 auto;
	width: 960px;
`
export const HomeLeft = styled.div`
	float: left;
	width: 625px;
	margin-left:15px;
	padding-top: 30px;
	.banner {
		width:625px;
		height: 270px;
	}
`
export const HomeRight = styled.div`
	float: right;
	width: 280px;
`
export const TopicList = styled.div`
	margin: 35px 0 20px;
	border-bottom: 1px solid #f0f0f0;
	padding-bottom: 20px;
	.more-hot-collection {
		display: inline-block;
	    margin-top: 7px;
	    font-size: 14px;
	    color: #787878
	}
`
export const BackTop = styled.div`
	position:fixed;
	cursor: pointer;
  width: 40px;
  height: 40px;
  border: 1px solid #dcdcdc;
  font-size: 14px;
  bottom: 50px;
  right: 50px;
  text-align: center;
  line-height: 18px;
  color: #333;
`
export const TopicItem = styled.a`
	display: inline-block;
    margin: 0 18px 18px 0;
    min-height: 32px;
    background-color: #f7f7f7;
    border: 1px solid #dcdcdc;
    border-radius: 4px;
    vertical-align: top;
    overflow: hidden;
    .item-img {
    	width: 32px;
    	height: 32px;
    	vertical-align: middle;
    }
    .item-name {
    	display: inline-block;
	    padding: 0 11px 0 11px;
	    font-size: 14px;
    }
`
export const ListItem = styled.div`
	position: relative;
    width: 100%;
    margin: 0 0 15px;
    padding: 15px 2px 20px 0;
    border-bottom: 1px solid #f0f0f0;
    word-wrap: break-word;
    .wrap-img {
    	position: absolute;
	    top: 50%;
	    margin-top: -60px;
	    right: 0;
	    width: 125px;
	    height: 100px;
	    border-radius: 4px;
    	border: 1px solid #f0f0f0;
    }
`
export const ListInfo = styled.div`
	padding-right: 140px;
	.title {
        margin: -7px 0 4px;
        display: inherit;
        font-size: 18px;
        font-weight: 700;
        line-height: 1.5;
        color: #969696;
	}
    a:-webkit-any-link {
        text-decoration: none;
    }
	.abstract {
	  margin: 0 0 8px;
    font-size: 13px;
    line-height: 24px;
    color: #999;
	}
	.meta {
		padding-right: 0!important;
        font-size: 12px;
        font-weight: 400;
        line-height: 20px;
    .nickname {
    	margin-right: 10px;
    	color: #b4b4b4;
    }
    span {
    	margin-right: 10px;
    	color: #b4b4b4
    }
}
`
export const LoadMore = styled.div`
		width: 100%;
    border-radius: 20px;
    background-color: #a5a5a5;
    height: 40px;
    margin: 30px auto 60px;
    padding: 10px 15px;
    text-align: center;
    font-size: 15px;
    border-radius: 20px;
    color: #fff;
    line-height: 1.2;
    cursor: pointer;
`
export const RecomList = styled.div`
	overflow: hidden;
	padding: 30px 0 0;
`
export const RecomItem = styled.a`
		float: left;
	  width: 100%;
    min-height: 50px;
    margin-bottom: 6px;
    border-radius: 4px;
    background: url(${(props)=>props.imgUrl});
    background-size: 100% 100%;
`




