import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Error = {
  field?: string;
  message?: string;
  code?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const errorSchema: Schema<Error> = s.object<Error>(
  {
    field: s.optional(s.string()),
    message: s.optional(s.string()),
    code: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
