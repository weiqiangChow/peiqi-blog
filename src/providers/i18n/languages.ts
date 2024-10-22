const languages = {
	en: 'English',
	zh: 'Chinese'
} as const

export const languagesKeyArr = Object.keys(languages)

export const DEFAULT_LANG = 'zh'

export type TLanguagesKey = keyof typeof languages

export {languages}