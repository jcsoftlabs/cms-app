import React from 'react';
import styled from 'styled-components';
import CardHeadline from '../components/CardHeadline';
import { ScrollView, SafeAreaView, ImageBackground, TouchableOpacity } from 'react-native';
import Logo from '../components/Logo';
import Article from '../components/Article';
import Menu from '../components/Menu';
import { connect } from 'react-redux';
import ModalLogin from '../components/ModalLogin';

function mapStateToProps(state) {
	return { action: state.action };
}

function mapDispatchToProps(dispatch) {
	return {
		openMenu: () =>
			dispatch({
				type: 'OPEN_MENU'
			})
	};
}

class HomeScreen extends React.Component {
	static navigationOptions = {
		header: null
	};
	render() {
		return (
			<Container>
				<ImageBackground
					source={require('../assets/golden-red-blurred-background.jpg')}
					style={{ width: '100%', height: '100%' }}
				>
					<Menu />
					<SafeAreaView>
						<ScrollView style={{ height: '100%' }}>
							<Titlebar>
								<TouchableOpacity
									onPress={this.props.openMenu}
									style={{ position: 'absolute', top: 0, left: 20 }}
								>
									<Avatar source={require('../assets/chris.jpg')} />
								</TouchableOpacity>
								<Title>Welcome back,</Title>
								<Name>Christopher</Name>
								<Icon source={require('../assets/icon-notifications.png')} />
							</Titlebar>
							<ScrollView
								style={{ flexDirection: 'row', padding: 20, paddingLeft: 12, paddingTop: 30 }}
								horizontal={true}
								showsHorizontalScrollIndicator={false}
							>
								{logos.map((logo, index) => <Logo key={index} Image={logo.image} Text={logo.Text} />)}
							</ScrollView>
							<Subtitle>Continue Reading</Subtitle>
							<ScrollView
								horizontal={true}
								style={{ paddingBottom: 30 }}
								showsHorizontalScrollIndicator={false}
							>
								{cardHeadlines.map((card, index) => (
									<TouchableOpacity
										key={index}
										onPress={() => {
											this.props.navigation.push('Section', { section: card });
										}}
									>
										<CardHeadline
											Title={card.title}
											Caption={card.caption}
											Subtitle={card.subtitle}
											Image={card.image}
											Logo={card.logo}
											Content={card.content}
										/>
									</TouchableOpacity>
								))}
							</ScrollView>
							<Subtitle>Popular Article</Subtitle>
							{articles.map((article, index) => (
								<Article
									key={index}
									image={article.image}
									title={article.title}
									subtitle={article.subtitle}
									logo={article.logo}
									author={article.author}
									avatar={article.avatar}
									caption={article.caption}
								/>
							))}
						</ScrollView>
					</SafeAreaView>
				</ImageBackground>
				<ModalLogin />
			</Container>
		);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);

const Icon = styled.Image`
	position: absolute;
	right: 20;
	top: 5;
	width: 15px;
	height: 15px;
`;

const Subtitle = styled.Text`
	color: #ffffff;
	font-weight: 600;
	font-size: 15px;
	margin-left: 20px;
	margin-top: 20px;
	text-transform: uppercase;
`;
const Container = styled.View`
	flex: 1;
	background-color: #f0f3f5;
	border-top-left-radius: 10px;
	border-top-right-radius: 10px;
`;

const Title = styled.Text`
	font-size: 16px;
	color: #ffffff;
	font-weight: 500;
`;

const Name = styled.Text`
	font-size: 20px;
	color: #000000;
	font-weight: bold;
`;

const Titlebar = styled.View`
	width: 100%;
	margin-top: 50px;
	padding-left: 80px;
`;

const Avatar = styled.Image`
	width: 44px;
	height: 44px;
	background-color: black;
	border-radius: 22px;
`;

const logos = [
	{
		image: require('../assets/logo-framerx.png'),
		Text: 'Framer X'
	},
	{
		image: require('../assets/logo-figma.png'),
		Text: 'Figma'
	},
	{
		image: require('../assets/logo-studio.png'),
		Text: 'Framer X'
	},
	{
		image: require('../assets/logo-react.png'),
		Text: 'Figma'
	},
	{
		image: require('../assets/logo-swift.png'),
		Text: 'Framer X'
	},
	{
		image: require('../assets/logo-sketch.png'),
		Text: 'Figma'
	}
];

const cardHeadlines = [
	{
		title: 'React Native For Designers',
		image: require('../assets/background11.jpg'),
		subtitle: 'React Native',
		caption: '1 of 12 sections',
		logo: require('../assets/logo-react.png'),
		content: '## ca va et toi'
	},
	{
		title: 'Styled Components',
		image: require('../assets/background12.jpg'),
		subtitle: 'React Native',
		caption: '2 of 12 sections',
		logo: require('../assets/logo-react.png'),
		content: '##ca va et toi'
	},
	{
		title: 'Props and Icons',
		image: require('../assets/background13.jpg'),
		subtitle: 'React Native',
		caption: '3 of 12 sections',
		logo: require('../assets/logo-react.png'),
		content: '## ca va et toi'
	},
	{
		title: 'Static Data and Loop',
		image: require('../assets/background14.jpg'),
		subtitle: 'React Native',
		caption: '4 of 12 sections',
		logo: require('../assets/logo-react.png'),
		content: '## ca va et toi'
	}
];

const articles = [
	{
		title: 'Prototype in Invision Studio',
		subtitle: '10 sections',
		image: require('../assets/background13.jpg'),
		logo: require('../assets/logo-studio.png'),
		author: 'Jer chris',
		avatar: require('../assets/chris.jpg'),
		caption: 'Create powerful design and code components'
	},
	{
		title: 'Prototype in Framer X',
		subtitle: '10 sections',
		image: require('../assets/background2.jpg'),
		logo: require('../assets/logo-framerx.png'),
		author: 'Jer chris',
		avatar: require('../assets/chris.jpg'),
		caption: 'Create powerful design and code components'
	},
	{
		title: 'Prototype in Figma',
		subtitle: '10 sections',
		image: require('../assets/background15.jpg'),
		logo: require('../assets/logo-figma.png'),
		author: 'Jer chris',
		avatar: require('../assets/chris.jpg'),
		caption: 'Create powerful design and code components'
	},
	{
		title: 'Prototype in Invision Sketch',
		subtitle: '10 sections',
		image: require('../assets/background16.jpg'),
		logo: require('../assets/logo-sketch.png'),
		author: 'Jer chris',
		avatar: require('../assets/chris.jpg'),
		caption: 'Create powerful design and code components'
	}
];
