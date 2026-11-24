import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  type3AmazonComprehendOperationsApiSchema,
  type Type3AmazonComprehendOperationsApi,
} from "./type3-amazon-comprehend-operations-api.js";

export type PiiEntityAmazonComprehendOperationsApi = {
  /** The level of confidence that Amazon Comprehend has in the accuracy of the detection. */
  score?: number;
  /** The entity's type. */
  type?: Type3AmazonComprehendOperationsApi;
  /**
   * The zero-based offset from the beginning of the source text to the first character in the
   * entity.
   */
  beginOffset?: number;
  /**
   * The zero-based offset from the beginning of the source text to the last character in the
   * entity.
   */
  endOffset?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const piiEntityAmazonComprehendOperationsApiSchema: Schema<PiiEntityAmazonComprehendOperationsApi> =
  s.object<PiiEntityAmazonComprehendOperationsApi>(
    {
      score: s.optional(s.float64()),
      type: s.optional(s.lazy(() => type3AmazonComprehendOperationsApiSchema)),
      beginOffset: s.optional(s.int()),
      endOffset: s.optional(s.int()),
      _keysMap: {
        score: "Score",
        type: "Type",
        beginOffset: "BeginOffset",
        endOffset: "EndOffset",
      },
    },
    { additionalProperties: s.json() },
  );
