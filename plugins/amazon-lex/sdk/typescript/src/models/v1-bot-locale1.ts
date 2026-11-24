import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The locale of the Amazon Lex V1 bot that is the source of the migration. */
export const V1BotLocale1 = {
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
export type V1BotLocale1 = (typeof V1BotLocale1)[keyof typeof V1BotLocale1] | (string & {});

export const v1BotLocale1Schema: EnumSchema<V1BotLocale1> = s.enumOf<V1BotLocale1>(V1BotLocale1);
