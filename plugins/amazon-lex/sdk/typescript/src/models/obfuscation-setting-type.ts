import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Value that determines whether Amazon Lex obscures slot values in conversation logs. The default
 * is to obscure the values.
 */
export const ObfuscationSettingType = {
  None: "None",
  DefaultObfuscation: "DefaultObfuscation",
} as const;
export type ObfuscationSettingType =
  | (typeof ObfuscationSettingType)[keyof typeof ObfuscationSettingType]
  | (string & {});

export const obfuscationSettingTypeSchema: EnumSchema<ObfuscationSettingType> =
  s.enumOf<ObfuscationSettingType>(ObfuscationSettingType);
