import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** An enumeration. */
export const AppLanguages = {
  EnUs: "en_US",
  Ar: "ar",
  EnGb: "en_GB",
  FrFr: "fr_FR",
  Es419: "es_419",
  DeDe: "de_DE",
  PtBr: "pt_BR",
  ItIt: "it_IT",
  JaJp: "ja_JP",
  KoKr: "ko_KR",
  TrTr: "tr_TR",
  RuRu: "ru_RU",
  Vi: "vi",
} as const;
export type AppLanguages = (typeof AppLanguages)[keyof typeof AppLanguages] | (string & {});

export const appLanguagesSchema: EnumSchema<AppLanguages> = s.enumOf<AppLanguages>(AppLanguages);
