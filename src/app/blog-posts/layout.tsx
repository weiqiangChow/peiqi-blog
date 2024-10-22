import React from 'react'
import { ThemedLayout } from '@components/themed-layout'

import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: "Peiqi's Blog Posts",
}

export default async function Layout({ children }: React.PropsWithChildren) {
    return <ThemedLayout>{children}</ThemedLayout>
}
