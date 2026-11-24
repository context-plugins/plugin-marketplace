import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  tagAmazonComprehendOperationsApiSchema,
  type TagAmazonComprehendOperationsApi,
} from "./tag-amazon-comprehend-operations-api.js";

export type PartOfSpeechTagAmazonComprehendOperationsApi = {
  /** Identifies the part of speech that the token represents. */
  tag?: TagAmazonComprehendOperationsApi;
  /** The confidence that Amazon Comprehend has that the part of speech was correctly identified. */
  score?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const partOfSpeechTagAmazonComprehendOperationsApiSchema: Schema<PartOfSpeechTagAmazonComprehendOperationsApi> =
  s.object<PartOfSpeechTagAmazonComprehendOperationsApi>(
    {
      tag: s.optional(s.lazy(() => tagAmazonComprehendOperationsApiSchema)),
      score: s.optional(s.float64()),
      _keysMap: {
        tag: "Tag",
        score: "Score",
      },
    },
    { additionalProperties: s.json() },
  );
