import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type BatchItemError = {
  /** The zero-based index of the document in the input list. */
  index?: number;
  /** The numeric error code of the error. */
  errorCode?: string;
  /** A text description of the error. */
  errorMessage?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const batchItemErrorSchema: Schema<BatchItemError> = s.object<BatchItemError>(
  {
    index: s.optional(s.int()),
    errorCode: s.optional(s.string()),
    errorMessage: s.optional(s.string()),
    _keysMap: {
      index: "Index",
      errorCode: "ErrorCode",
      errorMessage: "ErrorMessage",
    },
  },
  { additionalProperties: s.json() },
);
