import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** The error result of the operation in case of failure or cancellation. */
export type Status3 = {
  /**
   * A developer-facing error message, which should be in English. Any user-facing error message
   * should be localized and sent in the google.rpc.Status.details field, or localized by the
   * client.
   */
  message?: string;
  /**
   * A list of messages that carry the error details. There is a common set of message types for
   * APIs to use.
   */
  details?: Record<string, unknown>[];
  /** The status code, which should be an enum value of google.rpc.Code. */
  code?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const status3Schema: Schema<Status3> = s.object<Status3>(
  {
    message: s.optional(s.string()),
    details: s.optional(s.array(s.record(s.string(), s.unknown()))),
    code: s.optional(s.int()),
  },
  { additionalProperties: s.json() },
);
