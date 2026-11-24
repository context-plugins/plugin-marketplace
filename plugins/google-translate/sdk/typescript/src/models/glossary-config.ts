import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/**
 * Configures which glossary is used for a specific target language and defines options for applying
 * that glossary.
 */
export type GlossaryConfig = {
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

export const glossaryConfigSchema: Schema<GlossaryConfig> = s.object<GlossaryConfig>(
  {
    glossary: s.optional(s.string()),
    ignoreCase: s.optional(s.boolean()),
    contextualTranslationEnabled: s.optional(s.boolean()),
  },
  { additionalProperties: s.json() },
);
