
import { getUserList, getUserInfo, updateUserInfo } from "./users.js";

/** The definition of the functions that can be called by the AI */
export const functions = {
	displayColoredMessage: {
		description: "Use this function to display message with custom color",
		parameters: {
			"type": "object",
			"properties": {
				"color": {
					"type": "string",
					"description": "Color of the message, must be one of red, green, blue, yellow",
					"enum": ["red", "green", "blue", "yellow"]
				},
				"message": {
					"type": "string",
					"description": "Message to be sent"
				}
			},
			"required": ["message", "color"],
		},
		function: null,
		willCallback: false
	},
	getUserList: {
		description: "Get the list of users",
		parameters: {
			"type": "object",
			"properties": {},
		},
		function: getUserList,
		willCallback: true
	},
	getUserInfo: {
		description: "Get user's info {gender, favorite color} by name",
		parameters: {
			"type": "object",
			"properties": {
				"name": {
					"type": "string",
					"description": "Name of the user"
				},
			},
			"required": ["name"]
		},
		function: getUserInfo,
		willCallback: true
	},
	updateUserInfo: {
		description: "Update user's info, including favoriteColor and gender",
		parameters: {
			"type": "object",
			"properties": {
				"name": {
					"type": "string",
					"description": "Name of the user"
				},
				"info": {
					"type": "object",
					"description": "New info of the user",
					"properties": {
						"favoriteColor": {
							"type": "string",
							"description": "Favorite color of the user",
							"enum": ["red", "green", "blue", "yellow"]
						},
						"gender": {
							"type": "string",
							"description": "User's gender. Male or Female",
							"enum": ["Male", "Female"]
						}
					},
				},
			},
			"required": ["name", "info"]
		},
		function: updateUserInfo,
		willCallback: true
	}
};

export const functionsInfo = Object.keys(functions).map(key => ({
	name: key,
	description: functions[key].description,
	parameters: functions[key].parameters
}));