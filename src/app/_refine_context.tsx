'use client'
import React, { type PropsWithChildren } from 'react'

import { useNotificationProvider } from '@refinedev/antd'
import { Refine } from '@refinedev/core'
import { RefineKbarProvider } from '@refinedev/kbar'
import routerProvider from '@refinedev/nextjs-router'

import { ColorModeContextProvider } from '@contexts/color-mode'

import { dataProvider } from '@providers/data-provider'
import { authProvider } from '@providers/auth-provider'

import { AppstoreOutlined } from '@ant-design/icons'

// initialize i18n
import '../providers/i18n'

import { useTranslation } from 'next-i18next'

type Props = {
    themeMode?: string
}

export const RefineContext = ({ themeMode, children }: PropsWithChildren<Props>) => {
    const { t, i18n } = useTranslation()
    const i18nProvider = {
        translate: (key: string, params: object) => t(key, params),
        changeLocale: (lang: string) => i18n.changeLanguage(lang),
        getLocale: () => i18n.language,
    }

    return (
        <>
            <RefineKbarProvider>
                <ColorModeContextProvider defaultMode={themeMode}>
                    <Refine
                        routerProvider={routerProvider}
                        dataProvider={dataProvider}
                        authProvider={authProvider}
                        notificationProvider={useNotificationProvider}
                        i18nProvider={i18nProvider}
                        resources={[
                            {
                                name: 'blog_posts',
                                list: '/blog-posts',
                                create: '/blog-posts/create',
                                edit: '/blog-posts/edit/:id',
                                show: '/blog-posts/show/:id',
                                meta: {
                                    canDelete: true,
                                    icon: <AppstoreOutlined />,
                                },
                            },
                            {
                                name: 'categories',
                                list: '/categories',
                                create: '/categories/create',
                                edit: '/categories/edit/:id',
                                show: '/categories/show/:id',
                                meta: {
                                    canDelete: true,
                                },
                            },
                        ]}
                        options={{
                            syncWithLocation: true,
                            warnWhenUnsavedChanges: true,
                            useNewQueryKeys: true,
                        }}>
                        {children}
                    </Refine>
                </ColorModeContextProvider>
            </RefineKbarProvider>
        </>
    )
}
