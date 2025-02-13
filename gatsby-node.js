const path = require("path");

exports.createPages = async ({ actions }) => {
	const { createPage } = actions;

	// 예제 데이터 (실제 서비스에서는 DB 또는 JSON에서 불러올 수 있음)
	const invitations = [
		{ id: "abc123", name: "홍길동", date: "2025-05-01", location: "서울 강남구", message: "초대합니다!" },
		{ id: "xyz789", name: "김영희", date: "2025-06-10", location: "부산 해운대", message: "축하해주세요!" }
	];

	invitations.forEach((invite) => {
		createPage({
			path: `/invite/${invite.id}`, // 동적 URL 생성
			component: path.resolve(`src/templates/InvitationTemplate.js`), // 해당 경로의 컴포넌트 사용
			context: { invitation: invite }, // 페이지에 데이터 전달
		});
	});
};
