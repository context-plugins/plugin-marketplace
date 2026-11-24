import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Error = {
  /** The type of error */
  type?: string;
  /** The error message */
  message?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const errorSchema: Schema<Error> = s.object<Error>(
  {
    type: s.optional(s.string()),
    message: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
