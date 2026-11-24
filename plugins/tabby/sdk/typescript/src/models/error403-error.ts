import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Error403Error = {
  status?: string;
  errorType?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const error403ErrorSchema: Schema<Error403Error> = s.object<Error403Error>(
  {
    status: s.optional(s.string()),
    errorType: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
