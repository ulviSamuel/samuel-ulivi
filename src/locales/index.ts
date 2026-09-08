import { en } from './en';
import { it } from './it';
import type { Locale } from '../types/content';

export const locales = { en, it };
export type LocaleStrings = typeof en;
export const getLocale = (locale: Locale): LocaleStrings => locales[locale];