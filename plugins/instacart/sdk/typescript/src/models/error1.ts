import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Error1 = {
  /** The index of the record with the error. */
  index?: number;
  /** The error message describing the issue. */
  message?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const error1Schema: Schema<Error1> = s.object<Error1>(
  {
    index: s.optional(s.int()),
    message: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
