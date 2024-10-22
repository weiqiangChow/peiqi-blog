"use client";

import i18next from "i18next";
import {initReactI18next} from "react-i18next";
import resourcesToBackend from "i18next-resources-to-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import {DEFAULT_LANG} from "./languages";

i18next
.use(initReactI18next)
.use(LanguageDetector)
.use(
	resourcesToBackend(
		(language: string, namespace: string) =>
			import(`../../../public/locales/${language}/${namespace}.json`),
	),
)
.init({
	lng: DEFAULT_LANG,
	fallbackLng: "en",
	defaultNS: "common",
	detection: {
		order: ["htmlTag", "cookie"],
	},
});
