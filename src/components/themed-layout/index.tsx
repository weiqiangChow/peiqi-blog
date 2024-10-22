"use client";

import {Header} from "@components/header";
import {ThemedLayoutV2, ThemedTitleV2} from "@refinedev/antd";
import React from "react";

export const ThemedLayout = ({children}: React.PropsWithChildren) => {
	return (
		<ThemedLayoutV2
			Title={(props) => (
				<ThemedTitleV2
					// These values will override the global title values
					text="Peiqi's Admin"
					{...props}
				/>
			)}
			Header={() => <Header sticky/>}>{children}</ThemedLayoutV2>
	);
};
