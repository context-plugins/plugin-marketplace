import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { obfuscationSettingTypeSchema, type ObfuscationSettingType } from "./obfuscation-setting-type.js";

export type ObfuscationSetting = {
  /**
   * Value that determines whether Amazon Lex obscures slot values in conversation logs. The default
   * is to obscure the values.
   */
  obfuscationSettingType: ObfuscationSettingType;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const obfuscationSettingSchema: Schema<ObfuscationSetting> = s.object<ObfuscationSetting>(
  {
    obfuscationSettingType: obfuscationSettingTypeSchema,
  },
  { additionalProperties: s.json() },
);
