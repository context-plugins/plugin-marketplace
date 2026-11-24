import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The locale used for the Amazon Lex V1 bot. */
export const V1BotLocale2 = {
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
export type V1BotLocale2 = (typeof V1BotLocale2)[keyof typeof V1BotLocale2] | (string & {});

export const v1BotLocale2Schema: EnumSchema<V1BotLocale2> = s.enumOf<V1BotLocale2>(V1BotLocale2);
