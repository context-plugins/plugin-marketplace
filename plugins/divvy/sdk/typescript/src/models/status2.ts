import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Status2 = {
  /**
   * Set as `true` if the subscription is enabled. When you create a new subscription, this value is
   * set as `true` by default.
   */
  enabled?: boolean;
  /**
   * Reason for changing the subscription status. This field is used by BILL for informing you when
   * the `enabled` field is set as `false`.
   */
  reason?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const status2Schema: Schema<Status2> = s.object<Status2>(
  {
    enabled: s.optional(s.boolean()),
    reason: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
