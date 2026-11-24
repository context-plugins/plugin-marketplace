import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** A locale that specifies the language to use for recommendations. */
export const Locale = {
  DeDe: "DE_DE",
  EnUs: "EN_US",
  EnGb: "EN_GB",
  EsEs: "ES_ES",
  FrFr: "FR_FR",
  ItIt: "IT_IT",
  JaJp: "JA_JP",
  KoKr: "KO_KR",
  PtBr: "PT_BR",
  ZhCn: "ZH_CN",
  ZhTw: "ZH_TW",
} as const;
export type Locale = (typeof Locale)[keyof typeof Locale] | (string & {});

export const localeSchema: EnumSchema<Locale> = s.enumOf<Locale>(Locale);
