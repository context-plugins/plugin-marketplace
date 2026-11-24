import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type UsageCheckUsageResponse200 = {
  /** Whether usage is allowed */
  allowed?: boolean;
  /** Human-readable message about the usage check result */
  message?: string;
  /** Event name (only present when usage is not allowed) */
  eventName?: string;
  /** Available credits (only present for PrepaidCredits when insufficient) */
  available?: number;
  /** Current events quantity (only present when usage exceeds limit) */
  eventsQuantity?: number;
  /** Usage limit (only present when usage exceeds limit) */
  limit?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const usageCheckUsageResponse200Schema: Schema<UsageCheckUsageResponse200> =
  s.object<UsageCheckUsageResponse200>(
    {
      allowed: s.optional(s.boolean()),
      message: s.optional(s.string()),
      eventName: s.optional(s.string()),
      available: s.optional(s.float64()),
      eventsQuantity: s.optional(s.float64()),
      limit: s.optional(s.float64()),
    },
    { additionalProperties: s.json() },
  );
