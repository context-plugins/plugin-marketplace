import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Data = {
  plan?: string;
  creditsTotal?: number;
  creditsUsed?: number;
  /** Never negative, even if usage exceeds the plan. */
  creditsRemaining?: number;
  trialEndsAt?: Date | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const dataSchema: Schema<Data> = s.object<Data>(
  {
    plan: s.optional(s.string()),
    creditsTotal: s.optional(s.int()),
    creditsUsed: s.optional(s.int()),
    creditsRemaining: s.optional(s.int()),
    trialEndsAt: s.optionalNullable(s.dateTime()),
    _keysMap: {
      creditsTotal: "credits_total",
      creditsUsed: "credits_used",
      creditsRemaining: "credits_remaining",
      trialEndsAt: "trial_ends_at",
    },
  },
  { additionalProperties: s.json() },
);
