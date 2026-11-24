import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type V1HashtaggeneratorRequest = {
  /** The text to generate hashtags from */
  text: string;
  /** Number of hashtags to generate. 1 to 10) */
  count?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const v1HashtaggeneratorRequestSchema: Schema<V1HashtaggeneratorRequest> =
  s.object<V1HashtaggeneratorRequest>(
    {
      text: s.string(),
      count: s.optional(s.float64()),
    },
    { additionalProperties: s.json() },
  );
