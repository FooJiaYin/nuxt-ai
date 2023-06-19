let users = {
    "John": {
        gender: "Male",
        favoriteColor: "Yellow",
    },
    "Mary": {
        gender: "Female",
        favoriteColor: "blue",
    }
};

export function getUserList() {
    return Object.keys(users);
}

export function getUserInfo({ name }) {
    if (name in users) {
        return users[name];
    } else {
        return { error: "User not found. Please use getUserList to get the list of available users" };
    }
}

export function updateUserInfo({ name, info }) {
    users[name] = {
        ...users[name],
        info
    };
    return { success: true };
}