import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** The `glossary_config` used for this translation. */
export type TranslateTextGlossaryConfig3 = {
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

export const translateTextGlossaryConfig3Schema: Schema<TranslateTextGlossaryConfig3> =
  s.object<TranslateTextGlossaryConfig3>(
    {
      contextualTranslationEnabled: s.optional(s.boolean()),
      glossary: s.optional(s.string()),
      ignoreCase: s.optional(s.boolean()),
    },
    { additionalProperties: s.json() },
  );
