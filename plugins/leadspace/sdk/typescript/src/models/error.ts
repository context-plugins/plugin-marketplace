import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Error = {
  error?: string;
  trackingId?: string;
  requestTimestamp?: string;
  details?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const errorSchema: Schema<Error> = s.object<Error>(
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
