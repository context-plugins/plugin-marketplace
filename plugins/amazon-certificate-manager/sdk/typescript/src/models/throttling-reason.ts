import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ThrottlingReason = {
  /** A description of why a request was throttled. */
  reason?: string;
  /** The resource that causes the request to be throttled. */
  resource?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const throttlingReasonSchema: Schema<ThrottlingReason> = s.object<ThrottlingReason>(
  {
    reason: s.optional(s.string()),
    resource: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
