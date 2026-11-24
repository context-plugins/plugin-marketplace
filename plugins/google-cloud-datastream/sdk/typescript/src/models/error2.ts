import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Output only. In case of error, the details of the error in a user-friendly format. */
export type Error2 = {
  /** A message containing more information about the error that occurred. */
  message?: string;
  /** The time when the error occurred. */
  errorTime?: string;
  /** Additional information about the error. */
  details?: Record<string, string>;
  /**
   * A unique identifier for this specific error, allowing it to be traced throughout the system in
   * logs and API responses.
   */
  errorUuid?: string;
  /** A title that explains the reason for the error. */
  reason?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const error2Schema: Schema<Error2> = s.object<Error2>(
  {
    message: s.optional(s.string()),
    errorTime: s.optional(s.string()),
    details: s.optional(s.record(s.string(), s.string())),
    errorUuid: s.optional(s.string()),
    reason: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
