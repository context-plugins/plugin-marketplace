import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Error401KeyDoesntExist = {
  status?: string;
  errorType?: string;
  error?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const error401KeyDoesntExistSchema: Schema<Error401KeyDoesntExist> = s.object<Error401KeyDoesntExist>(
  {
    status: s.optional(s.string()),
    errorType: s.optional(s.string()),
    error: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
