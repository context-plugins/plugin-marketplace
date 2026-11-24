import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { type4Schema, type Type4 } from "./type4.js";

export type PiiEntity = {
  /** The level of confidence that Amazon Comprehend has in the accuracy of the detection. */
  score?: number;
  /** The entity's type. */
  type?: Type4;
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

export const piiEntitySchema: Schema<PiiEntity> = s.object<PiiEntity>(
  {
    score: s.optional(s.float64()),
    type: s.optional(s.lazy(() => type4Schema)),
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
