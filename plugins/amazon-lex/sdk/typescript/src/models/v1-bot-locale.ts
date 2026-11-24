import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The locale of the Amazon Lex V1 bot migrated to Amazon Lex V2. */
export const V1BotLocale = {
  DeDe: "de-DE",
  EnAu: "en-AU",
  EnGb: "en-GB",
  EnIn: "en-IN",
  EnUs: "en-US",
  Es419: "es-419",
  EsEs: "es-ES",
  EsUs: "es-US",
  FrFr: "fr-FR",
  FrCa: "fr-CA",
  ItIt: "it-IT",
  JaJp: "ja-JP",
  KoKr: "ko-KR",
} as const;
export type V1BotLocale = (typeof V1BotLocale)[keyof typeof V1BotLocale] | (string & {});

export const v1BotLocaleSchema: EnumSchema<V1BotLocale> = s.enumOf<V1BotLocale>(V1BotLocale);
