import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The target locale for the bot. */
export const LocaleAmazonLexModelBuildingV2VersionsApi = {
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
export type LocaleAmazonLexModelBuildingV2VersionsApi =
  | (typeof LocaleAmazonLexModelBuildingV2VersionsApi)[keyof typeof LocaleAmazonLexModelBuildingV2VersionsApi]
  | (string & {});

export const localeAmazonLexModelBuildingV2VersionsApiSchema: EnumSchema<LocaleAmazonLexModelBuildingV2VersionsApi> =
  s.enumOf<LocaleAmazonLexModelBuildingV2VersionsApi>(LocaleAmazonLexModelBuildingV2VersionsApi);
