import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Error403 = {
  status?: string;
  errorType?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const error403Schema: Schema<Error403> = s.object<Error403>(
  {
    status: s.optional(s.string()),
    errorType: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
