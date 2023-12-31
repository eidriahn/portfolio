import { AttrI18n } from "attr-i18n";

const languages = ["English", "Romanian", "Russian", "Italian"];

new AttrI18n(languages, {
  attr: "i18n-key",
  path: "assets/translations",
  debug: true,
  togglerID: "language-toggle",
  defaultLang: languages[0]
});
