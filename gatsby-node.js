const path = require("path");

exports.createPages = async ({ graphql, actions }) => {
	const { createPage } = actions;

	try {
		const result = await graphql(`
      {
        allMysqlInvitations {
          nodes {
            id
            name
            date
            location
            groom_name
            groom_account
            groom_father_name
            groom_father_account
            groom_mother_name
            groom_mother_account
            bride_name
            bride_account
            bride_father_name
            bride_father_account
            bride_mother_name
            bride_mother_account
            slug
          }
        }
      }
    `);

		// 🚀 디버깅용: 데이터 확인
		console.log("🔹 GraphQL Query Result:", JSON.stringify(result, null, 2));

		if (result.errors) {
			console.error("❌ GraphQL 쿼리 오류:", result.errors);
			return;
		}

		const invitation = result.data.allMysqlInvitations.nodes;

		if (!invitation || invitation.length === 0) {
			console.warn("⚠️ 초대장 데이터가 없습니다. DB를 확인하세요.");
			return;
		}

		invitation.forEach((invite) => {
			createPage({
				path: `/invite/${invite.slug}`,
				component: path.resolve(`src/templates/InvitationTemplate.js`),
				context: {
					invitation: {
						id: invite.id,
						name: invite.name,
						date: invite.date,
						location: invite.location,
						groom: {
							name: invite.groom_name,
							account: invite.groom_account,
							father: { name: invite.groom_father_name, account: invite.groom_father_account },
							mother: { name: invite.groom_mother_name, account: invite.groom_mother_account },
						},
						bride: {
							name: invite.bride_name,
							account: invite.bride_account,
							father: { name: invite.bride_father_name, account: invite.bride_father_account },
							mother: { name: invite.bride_mother_name, account: invite.bride_mother_account },
						},
					},
				},
			});
		});

		console.log("✅ 초대장 페이지 생성 완료!");
	} catch (error) {
		console.error("❌ Gatsby Node 실행 중 오류 발생:", error);
	}
};
