import React from "react";

const InvitationTemplate = ({ pageContext }) => {
	const { invitation } = pageContext;

	return (
		<div>
			<h1>{invitation.name}님의 청첩장</h1>
			<p>날짜: {invitation.date}</p>
			<p>장소: {invitation.location}</p>
			<p>메시지: {invitation.message}</p>
		</div>
	);
};

export default InvitationTemplate;
