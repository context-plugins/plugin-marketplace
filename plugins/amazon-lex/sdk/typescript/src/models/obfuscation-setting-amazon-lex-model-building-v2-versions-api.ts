import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Determines whether a slot is obfuscated in conversation logs and stored utterances. When you
 * obfuscate a slot, the value is replaced by the slot name in curly braces ({}). For example, if
 * the slot name is "full_name", obfuscated values are replaced with "{full_name}". For more
 * information, see Slot Obfuscation .
 */
export const ObfuscationSettingAmazonLexModelBuildingV2VersionsApi = {
  None: "NONE",
  DefaultObfuscation: "DEFAULT_OBFUSCATION",
} as const;
export type ObfuscationSettingAmazonLexModelBuildingV2VersionsApi =
  | (typeof ObfuscationSettingAmazonLexModelBuildingV2VersionsApi)[keyof typeof ObfuscationSettingAmazonLexModelBuildingV2VersionsApi]
  | (string & {});

export const obfuscationSettingAmazonLexModelBuildingV2VersionsApiSchema: EnumSchema<ObfuscationSettingAmazonLexModelBuildingV2VersionsApi> =
  s.enumOf<ObfuscationSettingAmazonLexModelBuildingV2VersionsApi>(
    ObfuscationSettingAmazonLexModelBuildingV2VersionsApi,
  );
