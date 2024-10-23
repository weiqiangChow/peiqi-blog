import type {AuthActionResponse, AuthProvider, CheckResponse} from "@refinedev/core";

export const authProvider: AuthProvider = {
	login: async ({ email, password }) => {
		// 假设我们在这里向后端发送了一个请求.
		if (password === '000') {
			localStorage.setItem("auth", JSON.stringify(password));
			return {
				success: true,
				redirectTo: "/",
			};
		}

		return {
			success: false,
			error: {
				message: "Login Error",
				name: "Invalid email or password",
			},
		};
	},
	check: async () => {
		const user = localStorage.getItem("auth");

		if (user) {
			return {
				authenticated: true,
			};
		}

		return {
			authenticated: false,
			logout: true,
			redirectTo: "/login",
			error: {
				message: "Check failed",
				name: "Unauthorized",
			},
		};
	},
	logout: async () => {
		localStorage.removeItem("auth");
		return {
			success: true,
			redirectTo: "/login",
		};
	},
	onError: async (error) => {
		if (error.status === 401 || error.status === 403) {
			return {
				logout: true,
				redirectTo: "/login",
				error,
			};
		}

		return {};
	},
}
