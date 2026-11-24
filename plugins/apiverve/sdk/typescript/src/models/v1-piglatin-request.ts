import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type V1PiglatinRequest = {
  /** The text to encode in Pig Latin */
  text: string;
  /** Words to exclude from encoding */
  exclusions?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const v1PiglatinRequestSchema: Schema<V1PiglatinRequest> = s.object<V1PiglatinRequest>(
  {
    text: s.string(),
    exclusions: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
