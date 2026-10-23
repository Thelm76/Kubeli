import type { LanguageCode } from "./config";

import deMessages from "./messages/de.json";
import enMessages from "./messages/en.json";
import frMessages from "./messages/fr.json";

const MESSAGE_MAP: Record<LanguageCode, Record<string, unknown>> = {
  en: enMessages,
  de: deMessages,
  fr: frMessages,
};

export function getMessages(lang: LanguageCode): Record<string, unknown> {
  return MESSAGE_MAP[lang] ?? enMessages;
}
