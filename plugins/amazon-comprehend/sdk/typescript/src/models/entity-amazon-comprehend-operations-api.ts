import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { blockReferenceSchema, type BlockReference } from "./block-reference.js";
import {
  type2AmazonComprehendOperationsApiSchema,
  type Type2AmazonComprehendOperationsApi,
} from "./type2-amazon-comprehend-operations-api.js";

export type EntityAmazonComprehendOperationsApi = {
  /** The level of confidence that Amazon Comprehend has in the accuracy of the detection. */
  score?: number;
  /**
   * The entity type. For entity detection using the built-in model, this field contains one of the
   * standard entity types listed below. For custom entity detection, this field contains one of the
   * entity types that you specified when you trained your custom model.
   */
  type?: Type2AmazonComprehendOperationsApi;
  /** The text of the entity. */
  text?: string;
  /**
   * The zero-based offset from the beginning of the source text to the first character in the
   * entity. This field is empty for non-text input.
   */
  beginOffset?: number;
  /**
   * The zero-based offset from the beginning of the source text to the last character in the
   * entity. This field is empty for non-text input.
   */
  endOffset?: number;
  /** A reference to each block for this entity. This field is empty for plain-text input. */
  blockReferences?: BlockReference[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const entityAmazonComprehendOperationsApiSchema: Schema<EntityAmazonComprehendOperationsApi> =
  s.object<EntityAmazonComprehendOperationsApi>(
    {
      score: s.optional(s.float64()),
      type: s.optional(s.lazy(() => type2AmazonComprehendOperationsApiSchema)),
      text: s.optional(s.string()),
      beginOffset: s.optional(s.int()),
      endOffset: s.optional(s.int()),
      blockReferences: s.optional(s.array(s.lazy(() => blockReferenceSchema))),
      _keysMap: {
        score: "Score",
        type: "Type",
        text: "Text",
        beginOffset: "BeginOffset",
        endOffset: "EndOffset",
        blockReferences: "BlockReferences",
      },
    },
    { additionalProperties: s.json() },
  );
