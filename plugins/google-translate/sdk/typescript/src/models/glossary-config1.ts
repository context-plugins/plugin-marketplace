import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/**
 * Optional. Glossary to be applied. The glossary must be within the same region (have the same
 * location-id) as the model, otherwise an INVALID_ARGUMENT (400) error is returned.
 */
export type GlossaryConfig1 = {
  /**
   * Required. The `glossary` to be applied for this translation. The format depends on the
   * glossary: - User-provided custom glossary:
   * `projects/{project-number-or-id}/locations/{location-id}/glossaries/{glossary-id}`
   */
  glossary?: string;
  /** Optional. Indicates match is case insensitive. The default value is `false` if missing. */
  ignoreCase?: boolean;
  /** Optional. If set to true, the glossary will be used for contextual translation. */
  contextualTranslationEnabled?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const glossaryConfig1Schema: Schema<GlossaryConfig1> = s.object<GlossaryConfig1>(
  {
    glossary: s.optional(s.string()),
    ignoreCase: s.optional(s.boolean()),
    contextualTranslationEnabled: s.optional(s.boolean()),
  },
  { additionalProperties: s.json() },
);
