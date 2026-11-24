import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Error1 = {
  /** The type of error. */
  type: string;
  /** A human-readable description of the error. */
  message: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const error1Schema: Schema<Error1> = s.object<Error1>(
  {
    type: s.string(),
    message: s.string(),
  },
  { additionalProperties: s.json() },
);
