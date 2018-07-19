import React, { Component } from 'react';
import DatePicker from 'react-mobile-datepicker';

class Mine extends Component {
	state = {
		time: new Date(),
		isOpen: false,
	}

	handleClick = () => {
		this.setState({ isOpen: true });
	}

	handleCancel = () => {
		this.setState({ isOpen: false });
	}

	handleSelect = (time) => {
		this.setState({ time, isOpen: false });
	}

	render() {
		return (
			<div className="Mine">
				<button
					className="select-btn"
					onClick={this.handleClick}>
					select time
				</button>

				<DatePicker
                    value={this.state.time}
                    dateFormat={['YYYY', 'MM', 'DD','hh','mm']}
                    theme={'ios'}
                    showHeader
                    showFormat={'YYYY/MM/DD hh:mm'}
					isOpen={this.state.isOpen}
					onSelect={this.handleSelect}
					onCancel={this.handleCancel} />
			</div>
		);
	}
}

export default Mine;

