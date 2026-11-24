import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type V1TextsimilarityRequest = {
  /** The first text to compare. Must be less than 1000 characters */
  text1: string;
  /** The second text to compare. Must be less than 1000 characters */
  text2: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const v1TextsimilarityRequestSchema: Schema<V1TextsimilarityRequest> =
  s.object<V1TextsimilarityRequest>(
    {
      text1: s.string(),
      text2: s.string(),
    },
    { additionalProperties: s.json() },
  );
