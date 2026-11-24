import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Specifies the target locale for the bot. */
export const Locale1AmazonLexModelBuildingV2VersionsApi = {
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
export type Locale1AmazonLexModelBuildingV2VersionsApi =
  | (typeof Locale1AmazonLexModelBuildingV2VersionsApi)[keyof typeof Locale1AmazonLexModelBuildingV2VersionsApi]
  | (string & {});

export const locale1AmazonLexModelBuildingV2VersionsApiSchema: EnumSchema<Locale1AmazonLexModelBuildingV2VersionsApi> =
  s.enumOf<Locale1AmazonLexModelBuildingV2VersionsApi>(Locale1AmazonLexModelBuildingV2VersionsApi);
