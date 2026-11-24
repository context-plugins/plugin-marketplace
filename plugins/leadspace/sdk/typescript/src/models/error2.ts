import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** General Leadspace JSON error envelope */
export type Error2 = {
  /** Error description */
  error?: string;
  /** Leadspace tracking identifier for further inspection */
  trackingId?: string;
  /** Timestamp assigned when the request reached Leadspace servers */
  requestTimestamp?: string;
  details?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const error2Schema: Schema<Error2> = s.object<Error2>(
  {
    error: s.optional(s.string()),
    trackingId: s.optional(s.string()),
    requestTimestamp: s.optional(s.string()),
    details: s.optional(s.string()),
    _keysMap: {
      trackingId: "tracking_id",
      requestTimestamp: "request_timestamp",
    },
  },
  { additionalProperties: s.json() },
);
