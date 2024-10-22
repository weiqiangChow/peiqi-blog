import type { Metadata } from 'next'
import { cookies } from 'next/headers'
import React, { Suspense } from 'react'
import { AntdRegistry } from '@ant-design/nextjs-registry'

import { RefineContext } from './_refine_context'
import '@refinedev/antd/dist/reset.css'
import './global.css'

export const metadata: Metadata = {
    title: "Peiqi's Admin",
    description: "Peiqi's Admin",
}

export default async function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    const cookieStore = await cookies()
    const theme = cookieStore.get('theme')
    const lang = cookieStore.get('NEXT_LOCALE')

    return (
        <html lang={lang?.value || 'en'}>
            <body>
                <Suspense>
                    <AntdRegistry>
                        <RefineContext themeMode={theme?.value}>{children}</RefineContext>
                    </AntdRegistry>
                </Suspense>
            </body>
        </html>
    )
}
