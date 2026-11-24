import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type V1InitialismgeneratorRequest = {
  /** Phrase to convert to initialism (max 500 characters) */
  phrase: string;
  /** Exclude common words like 'the', 'of', 'and' */
  excludeCommonWords?: boolean;
  /** Return the initialism in uppercase */
  uppercase?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const v1InitialismgeneratorRequestSchema: Schema<V1InitialismgeneratorRequest> =
  s.object<V1InitialismgeneratorRequest>(
    {
      phrase: s.string(),
      excludeCommonWords: s.optional(s.boolean()),
      uppercase: s.optional(s.boolean()),
    },
    { additionalProperties: s.json() },
  );
