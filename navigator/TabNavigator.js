import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import HomeScreen from '../screens/HomeScreen';
import SectionScreen from '../screens/SectionScreen';
import { Ionicons } from '@expo/vector-icons';
import ProjectsScreen from '../screens/ProjectsScreen';
import CategoriesScreen from '../screens/CategoriesScreen';

const activeColor = '#47775f2';
const inactiveColor = '#b8bece';

const HomeStack = createStackNavigator(
	{
		Home: HomeScreen,
		Section: SectionScreen
	},
	{ mode: 'modal' }
);

HomeStack.navigationOptions = ({ navigation }) => {
	var tabBarVisible = true;
	const routeName = navigation.state.routes[navigation.state.index].routeName;

	if (routeName == 'Section') {
		tabBarVisible = false;
	}
	return {
		tabBarVisible,
		tabBarLabel: 'Home',
		tabBarIcon: ({ focused }) => (
			<Ionicons name="ios-home" size={25} color={focused ? activeColor : inactiveColor} />
		)
	};
};

const CategoriesStack = createStackNavigator({
	categories: CategoriesScreen
});

CategoriesStack.navigationOptions = {
	tabBarLabel: 'Categories',
	tabBarIcon: ({ focused }) => <Ionicons name="ios-albums" size={25} color={focused ? activeColor : inactiveColor} />
};

const ProjectsStack = createStackNavigator({
	Projects: ProjectsScreen
});

ProjectsStack.navigationOptions = {
	tabBarLabel: 'Projects',
	tabBarIcon: ({ focused }) => <Ionicons name="ios-folder" size={25} color={focused ? activeColor : inactiveColor} />
};
const TabNavigator = createBottomTabNavigator({
	HomeStack,
	CategoriesStack,
	ProjectsStack
});

export default TabNavigator;
