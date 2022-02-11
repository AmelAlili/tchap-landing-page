import React, { Component } from 'react';
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import ConventionPdf from "public/CONVENTION_DE_SERVICE_TCHAP_2022.pdf";

class ConventionLink extends Component {
	static propTypes = {
		linkText: PropTypes.string.isRequired,
	};

	// TODO : add hookProbe

	constructor(props) {
		super(props);
	}

	findFilenameFromPath(fullPath) {
		var filename = fullPath.replace(/^.*[\\\/]/, '')
		return filename;
	}

	render() {
		return (
			<React.Fragment>
				<a href={ConventionPdf} download={this.findFilenameFromPath(ConventionPdf)}>{this.props.linkText}</a>
			</React.Fragment>
		);
	}
}

export default ConventionLink;
