import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** A list of locales that the slot type supports. */
export const Locale1 = {
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
export type Locale1 = (typeof Locale1)[keyof typeof Locale1] | (string & {});

export const locale1Schema: EnumSchema<Locale1> = s.enumOf<Locale1>(Locale1);
