import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type IntentDisambiguationSettings = {
  /**
   * Determines whether the Intent Disambiguation feature is enabled. When set to true, Amazon Lex
   * will present disambiguation options to users when multiple intents could match their input,
   * with the default being false.
   */
  enabled: boolean;
  /**
   * Specifies the maximum number of intent options (2-5) to present to users when disambiguation is
   * needed. This setting determines how many intent options will be shown to users when the system
   * detects ambiguous input. The default value is 3.
   */
  maxDisambiguationIntents?: number;
  /**
   * Provides a custom message that will be displayed before presenting the disambiguation options
   * to users. This message helps set the context for users and can be customized to match your
   * bot's tone and brand. If not specified, a default message will be used.
   */
  customDisambiguationMessage?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const intentDisambiguationSettingsSchema: Schema<IntentDisambiguationSettings> =
  s.object<IntentDisambiguationSettings>(
    {
      enabled: s.boolean(),
      maxDisambiguationIntents: s.optional(s.int()),
      customDisambiguationMessage: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
