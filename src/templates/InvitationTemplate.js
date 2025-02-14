import React, { useEffect } from "react";
import { Layout } from "antd";
import styled from "styled-components";
import "antd/dist/antd.css";

import Title from "../components/title";
import Gallery from "../components/gallery";
import Greeting from "../components/greeting";
import Location from "../components/location";
import Share from "../components/share";
import Quote from "../components/quote";
import CongratulatoryMoney from "../components/congratulatoryMoney";

import GroovePaper from "../assets/GroovePaper.png";

import AOS from "aos";
import "aos/dist/aos.css";

const { Footer } = Layout;

const Wrapper = styled.div`
    background: #efebe9;
    background-image: url(${GroovePaper});
    width: 100%;
`;

const InvitationTemplate = ({ pageContext }) => {
	const { invitation } = pageContext;

	useEffect(() => {
		AOS.init({
			duration: 1500,
		});
	});

	if (!invitation) {
		return <div>초대장 정보를 불러올 수 없습니다.</div>;
	}

	return (
		<Wrapper>
			<Title invitation={invitation} />
			<Greeting invitation={invitation} />
			<Gallery />
			{/*<Location location={invitation.location} />*/}
			{/*<Quote />*/}
			{/*<CongratulatoryMoney invitation={invitation} />*/}
			{/*<Share />*/}
			<Footer
				style={{
					background: "#D7CCC8",
					backgroundImage: `url(${GroovePaper})`,
					opacity: 0.6,
					textAlign: "center",
				}}
			>
				Copyright © 2025 {invitation.name}
			</Footer>
		</Wrapper>
	);
};

export default InvitationTemplate;
