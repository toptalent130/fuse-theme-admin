/**
 * Authorization Roles
 */
const authRoles = {
	manager: ['manager'],
	admin: ['admin'],
	staff: ['manager', 'staff'],
	user: ['manager', 'staff', 'user'],
	onlyGuest: []
};

export default authRoles;
