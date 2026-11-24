import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** A list of locales that the intent supports. */
export const LocaleAmazonLexModelBuildingV2BuiltinsApi = {
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
export type LocaleAmazonLexModelBuildingV2BuiltinsApi =
  | (typeof LocaleAmazonLexModelBuildingV2BuiltinsApi)[keyof typeof LocaleAmazonLexModelBuildingV2BuiltinsApi]
  | (string & {});

export const localeAmazonLexModelBuildingV2BuiltinsApiSchema: EnumSchema<LocaleAmazonLexModelBuildingV2BuiltinsApi> =
  s.enumOf<LocaleAmazonLexModelBuildingV2BuiltinsApi>(LocaleAmazonLexModelBuildingV2BuiltinsApi);
