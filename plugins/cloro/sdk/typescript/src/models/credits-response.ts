import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type CreditsResponse = {
  /** Credits currently remaining for your organization. */
  remaining: number;
  /**
   * Credits granted per billing cycle. Null for free-tier organizations with no active
   * subscription.
   */
  perCycle: number | null;
  /**
   * When the current billing cycle ends and credits reset. Null for free-tier organizations with no
   * active subscription.
   */
  cycleResetsAt: Date | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const creditsResponseSchema: Schema<CreditsResponse> = s.object<CreditsResponse>(
  {
    remaining: s.int(),
    perCycle: s.nullable(s.int()),
    cycleResetsAt: s.nullable(s.dateTime()),
  },
  { additionalProperties: s.json() },
);
