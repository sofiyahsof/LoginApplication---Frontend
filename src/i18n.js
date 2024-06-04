import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          "Login": "Login",
          "Username": "Username",
          "Password": "Password",
          "Invalid username or password": "Invalid username or password",
          "English": "English",
          "Mandarin": "Mandarin",
        }
      },
      zh: {
        translation: {
          "Login": "登录",
          "Username": "用户名",
          "Password": "密码",
          "Invalid username or password": "用户名或密码无效",
          "English": "英语",
          "Mandarin": "普通话",
        }
      }
    },
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
