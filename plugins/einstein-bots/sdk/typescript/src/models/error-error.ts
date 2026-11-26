import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ErrorError = {
  /** HTTP status. */
  status: number;
  /** Request path. */
  path: string;
  /** Request ID. A UUID in string format to help with request tracking. */
  requestId: string;
  /** Error class name. */
  error: string;
  /** Exception message. */
  message: string;
  /** Unix timestamp. */
  timestamp: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const errorErrorSchema: Schema<ErrorError> = s.object<ErrorError>(
  {
    status: s.int(),
    path: s.string(),
    requestId: s.string(),
    error: s.string(),
    message: s.string(),
    timestamp: s.int(),
  },
  { additionalProperties: s.json() },
);
