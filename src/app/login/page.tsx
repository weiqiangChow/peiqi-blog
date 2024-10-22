import { AuthPage } from '@components/auth-page'
import { Header } from '@components/header'
import React from 'react'

export default async function Login() {
    return (
		<>
			<Header sticky></Header>
            <AuthPage type='login' />
        </>
    )
}
