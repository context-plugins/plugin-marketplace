import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Errors1 = {
  /** Error message */
  message: string;
  /** Optional additional details regarding the error */
  details?: Record<string, unknown>;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const errors1Schema: Schema<Errors1> = s.object<Errors1>(
  {
    message: s.string(),
    details: s.optional(s.record(s.string(), s.unknown())),
  },
  { additionalProperties: s.json() },
);
