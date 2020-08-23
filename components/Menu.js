import React from 'react';
import styled from 'styled-components';
import { Animated, TouchableOpacity, Dimensions, InteractionManager } from 'react-native';
import MenuItem from './MenuItem';
import { connect } from 'react-redux';

function mapStateToProps(state) {
	return { action: state.action };
}

function mapDispatchToProps(dispatch) {
	return {
		closeMenu: () =>
			dispatch({
				type: 'CLOSE_MENU'
			})
	};
}

const screenHeight = Dimensions.get('window').height;

class Menu extends React.Component {
	state = {
		top: new Animated.Value(screenHeight)
	};

	componentDidMount() {
		this.toggleMenu();
	}

	componentDidUpdate() {
		this.toggleMenu();
	}

	toggleMenu = () => {
		if (this.props.action == 'openMenu') {
			Animated.spring(this.state.top, {
				toValue: 0
			}).start();
		}
		if (this.props.action == 'closeMenu') {
			Animated.spring(this.state.top, {
				toValue: screenHeight
			}).start();
		}
	};

	render() {
		return (
			<AnimatedContainer style={{ top: this.state.top }}>
				<Cover>
					<Image source={require('../assets/background2.jpg')} />
					<Title>Christopher Jerome</Title>
					<Subtitle>Fullstack Developer</Subtitle>
				</Cover>
				<TouchableOpacity
					onPress={this.props.closeMenu}
					style={{ position: 'absolute', top: 120, left: '50%', marginLeft: -22, zIndex: 1 }}
				>
					<CloseView>
						<Icon source={require('../assets/close.png')} />
					</CloseView>
				</TouchableOpacity>
				<Content>
					{items.map((item, index) => (
						<MenuItem key={index} icon={item.icon} title={item.title} text={item.text} />
					))}
				</Content>
			</AnimatedContainer>
		);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Menu);

const Image = styled.Image`
	position: absolute;
	width: 100%;
	height: 100%;
`;

const Title = styled.Text`
	color: white;
	font-size: 24px;
	font-weight: 600;
`;

const Subtitle = styled.Text`
	font-size: 13px;
	color: rgba(255, 255, 255, 0.5);
	margin-top: 8px;
`;

const Container = styled.View`
	position: absolute;
	background: white;
	width: 100%;
	height: 100%;
	z-index: 100;
`;

const AnimatedContainer = Animated.createAnimatedComponent(Container);

const Cover = styled.View`
	height: 142px;
	background: black;
	justify-content: center;
	align-items: center;
`;

const Content = styled.View`
	height: 900px;
	background: #f0f3f5;
	height: ${screenHeight};
	padding: 50px;
`;

const CloseView = styled.View`
	width: 40px;
	height: 40px;
	border-radius: 22px;
	background: white;
	justify-content: center;
	box-shadow: 0 5px 10px rgba(0, 0, 0, 0.15);
`;

const Icon = styled.Image`
	width: 40px;
	height: 40px;
`;

const items = [
	{
		icon: require('../assets/icons8-settings.png'),
		title: 'Account',
		text: 'settings'
	},
	{
		icon: require('../assets/ios-card.png'),
		title: 'Billing',
		text: 'payments'
	},
	{
		icon: require('../assets/icon-star.png'),
		title: 'Rate',
		text: 'Rate this app'
	},
	{
		icon: require('../assets/icon-logout.png'),
		title: 'Log out',
		text: 'See you soon'
	}
];
