import React from 'react';
import './Blog_Contents.css';

class Contents extends React.Component{
	render(){
		return (
			<div className="blog-content">
				<p className="content-title">{this.props.title}</p>
				<p className="content-text">{this.props.text}</p>
			</div>
		)
	}
}
export default Contents;