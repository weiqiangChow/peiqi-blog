'use client'

import { DevtoolsProvider } from '@providers/devtools'
import { useNotificationProvider } from '@refinedev/antd'
import { Refine } from '@refinedev/core'
import { RefineKbar, RefineKbarProvider } from '@refinedev/kbar'
import routerProvider from '@refinedev/nextjs-router'
import React, { type PropsWithChildren } from 'react'
import { ColorModeContextProvider } from '@contexts/color-mode'
import { dataProvider } from '@providers/data-provider'
import { useTranslation } from 'next-i18next'
import { AppstoreOutlined } from '@ant-design/icons'

// initialize i18n
import '../providers/i18n'

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
                    {/*<DevtoolsProvider>*/}
                    <Refine
                        routerProvider={routerProvider}
                        dataProvider={dataProvider}
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
                        {/*<RefineKbar />*/}
                    </Refine>
                    {/*</DevtoolsProvider>*/}
                </ColorModeContextProvider>
            </RefineKbarProvider>
        </>
    )
}
