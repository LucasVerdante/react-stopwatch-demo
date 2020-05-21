import i18n from 'i18next';
import { initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';

import translationEN from './translations/en/translation.json';

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    resources: {
      en: {
        translations: translationEN
      },
      fallbackLng: 'en',
      debug: true,
      ns: ['translations'],
      defaultNS: 'translations',
      keySeparator: false,
      interpolation: {
        escapeValue: false,
        formatSeparator: ','
      },
      react: {
        wait: true
      }
    }
  });

export default i18n;
