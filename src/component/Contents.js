import React from 'react';
import './Contents.css';

class Contents extends React.Component{
	render(){
		return (
			<div className="content">
				<p className="content-title">{this.props.title}</p>
				<p className="content-text">{this.props.text}</p>
			</div>
		)
	}
}
export default Contents;