import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { code2Schema, type Code2 } from "./code2.js";

export type Error2 = {
  /** Error code identifying the failure reason. */
  code: Code2;
  /** Human-readable error message. */
  message: string;
  /** Additional context about the error, such as field-level validation failures. */
  details?: Record<string, unknown>;
  /** Timestamp when the error occurred. */
  timestamp: Date;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const error2Schema: Schema<Error2> = s.object<Error2>(
  {
    code: code2Schema,
    message: s.string(),
    details: s.optional(s.record(s.string(), s.unknown())),
    timestamp: s.dateTime(),
  },
  { additionalProperties: s.json() },
);
