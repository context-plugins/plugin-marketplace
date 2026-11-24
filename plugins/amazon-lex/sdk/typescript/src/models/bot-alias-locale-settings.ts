import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { codeHookSpecificationSchema, type CodeHookSpecification } from "./code-hook-specification.js";

export type BotAliasLocaleSettings = {
  /**
   * Determines whether the locale is enabled for the bot. If the value is false, the locale isn't
   * available for use.
   */
  enabled: boolean;
  codeHookSpecification?: CodeHookSpecification;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const botAliasLocaleSettingsSchema: Schema<BotAliasLocaleSettings> = s.object<BotAliasLocaleSettings>(
  {
    enabled: s.boolean(),
    codeHookSpecification: s.optional(s.lazy(() => codeHookSpecificationSchema)),
  },
  { additionalProperties: s.json() },
);
