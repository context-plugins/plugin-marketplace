import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/**
 * Optional. Glossary to be applied. The glossary must be within the same region (have the same
 * location-id) as the model, otherwise an INVALID_ARGUMENT (400) error is returned.
 */
export type TranslateTextGlossaryConfig2 = {
  /** Optional. If set to true, the glossary will be used for contextual translation. */
  contextualTranslationEnabled?: boolean;
  /**
   * Required. The `glossary` to be applied for this translation. The format depends on the
   * glossary: - User-provided custom glossary:
   * `projects/{project-number-or-id}/locations/{location-id}/glossaries/{glossary-id}`
   */
  glossary?: string;
  /** Optional. Indicates match is case insensitive. The default value is `false` if missing. */
  ignoreCase?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const translateTextGlossaryConfig2Schema: Schema<TranslateTextGlossaryConfig2> =
  s.object<TranslateTextGlossaryConfig2>(
    {
      contextualTranslationEnabled: s.optional(s.boolean()),
      glossary: s.optional(s.string()),
      ignoreCase: s.optional(s.boolean()),
    },
    { additionalProperties: s.json() },
  );
