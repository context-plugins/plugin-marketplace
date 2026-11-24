import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { code5Schema, type Code5 } from "./code5.js";

export type Error10 = {
  /** Error code identifying the failure reason. */
  code: Code5;
  /** Human-readable error message. */
  message: string;
  /** Additional context about the error, such as field-level validation failures. */
  details?: Record<string, unknown>;
  /** Timestamp when the error occurred. */
  timestamp: Date;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const error10Schema: Schema<Error10> = s.object<Error10>(
  {
    code: code5Schema,
    message: s.string(),
    details: s.optional(s.record(s.string(), s.unknown())),
    timestamp: s.dateTime(),
  },
  { additionalProperties: s.json() },
);
