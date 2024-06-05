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
          "Welcome": "Welcome",
          "Access Restricted Page": "Access Restricted Page",
          "Logout": "Logout",
          "Restricted Page": "Restricted Page",
          "This page is only accessible by managers.": "This page is only accessible by managers.",
          "English": "English",
          "Mandarin": "Mandarin",
          "Role": "Role",
          "manager": "manager",
          "user": "user",
        }
      },
      zh: {
        translation: {
          "Login": "登录",
          "Username": "用户名",
          "Password": "密码",
          "Invalid username or password": "无效的用户名或密码",
          "Welcome": "欢迎",
          "Access Restricted Page": "访问受限页面",
          "Logout": "登出",
          "Restricted Page": "受限页面",
          "This page is only accessible by managers.": "此页面仅限经理访问。",
          "English": "英语",
          "Mandarin": "普通话",         
          "Role": "角色",
          "manager": "经理",
          "user": "用户",
        }
      }
    },
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
