import React from 'react';
import Header from './component/Header.js'
import Contents from './component/Contents.js'
import './App.css';

class App extends React.Component{
	state = {
        current : 0,
        information: [
            {
                id:0,
                title: '김태현',
                text : '안녕하세요 저의 이름은 김태현입니다.'
            },
            {
                id:1,
                title: '한양대학교 정보시스템학과',
                text: '문과입니다.'
            },
            {
                id:2,
                title: '피파를 잘',
                text: '합니다.'
            },
            {
                id:3,
                title: '제2학생생활관',
                text: '에 살고있어요'
            },
            {
                id:4,
                title: '취미는',
                text: '독서입니다.'
            },
            {
                id:5,
                title: '쓰리팝에 10시간',
                text: '이 충전되어있습니다.'
            },
            {
                id:6,
                title: 'ITBT관 ',
                text: '에서 수업을 듣습니다.'
            }
        ]
    }

	render(){
		var list = this.state.information.map(x => <Contents title={x.title} text = {x.text} key = {x.id}/>)
		console.log(list)
		return(
			<div>
				<Header />
                <div className="wrapper">
				{list}
                </div>
			</div>

		)
	}
}

export default App;
