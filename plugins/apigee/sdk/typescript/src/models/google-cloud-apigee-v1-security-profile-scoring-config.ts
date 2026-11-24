import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Security configurations to manage scoring. */
export type GoogleCloudApigeeV1SecurityProfileScoringConfig = {
  /** Description of the config. */
  description?: string;
  /** Title of the config. */
  title?: string;
  /** Path of the component config used for scoring. */
  scorePath?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApigeeV1SecurityProfileScoringConfigSchema: Schema<GoogleCloudApigeeV1SecurityProfileScoringConfig> =
  s.object<GoogleCloudApigeeV1SecurityProfileScoringConfig>(
    {
      description: s.optional(s.string()),
      title: s.optional(s.string()),
      scorePath: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
