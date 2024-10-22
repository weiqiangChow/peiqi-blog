"use client";
import React from "react";
import {AuthPage as AuthPageBase} from "@refinedev/antd";
import type {AuthPageProps} from "@refinedev/core";


export const AuthPage = (props: AuthPageProps) => {
	return (
		<AuthPageBase
			{...{title: "Peiqi's Admin Login", ...props}}
			// title={(<h2>Peiqi's Admin Login</h2>)}
			formProps={{
				initialValues: {
					email: "demo@refine.dev",
					password: "demodemo",
				},
			}}
		/>
	);
};
