import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { assistedNluModeSchema, type AssistedNluMode } from "./assisted-nlu-mode.js";
import {
  intentDisambiguationSettingsSchema,
  type IntentDisambiguationSettings,
} from "./intent-disambiguation-settings.js";

export type NluImprovementSpecification = {
  /**
   * Determines whether the Assisted NLU feature is enabled for the bot. When set to true, Amazon
   * Lex uses advanced models to improve intent recognition and slot resolution, with the default
   * being false.
   */
  enabled: boolean;
  /**
   * Specifies the mode for Assisted NLU operation. Use Primary to make Assisted NLU the primary
   * intent recognition method, Fallback to use it only when standard NLU confidence is low, or
   * DialogManager to use a large language model to manage the conversation, including intent
   * recognition, slot elicitation, and confirmation.
   */
  assistedNluMode?: AssistedNluMode;
  intentDisambiguationSettings?: IntentDisambiguationSettings;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const nluImprovementSpecificationSchema: Schema<NluImprovementSpecification> =
  s.object<NluImprovementSpecification>(
    {
      enabled: s.boolean(),
      assistedNluMode: s.optional(s.lazy(() => assistedNluModeSchema)),
      intentDisambiguationSettings: s.optional(s.lazy(() => intentDisambiguationSettingsSchema)),
    },
    { additionalProperties: s.json() },
  );
