import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/**
 * `insufficient_tokens`: the request's price is above the account's balance. Nothing was served or
 * spent. The message names the price, the balance and the reset, and two fixes: add filters, or
 * (plan `business`) talk to us about Enterprise at https://oddsrelay.io/contact, or (a custom plan)
 * talk to us about raising your allowance at https://oddsrelay.io/contact, or (every other plan)
 * upgrade. No `Retry-After`.
 */
export type Error7 = {
  /** @default "insufficient_tokens" */
  code?: "insufficient_tokens";
  message: string;
  requestId: string;
  /** This request's price in tokens. */
  cost: number;
  /** Tokens left until `resets_at`. */
  remaining: number;
  /**
   * ISO-8601 UTC, whole seconds: when the pool resets; on a trial, the trial's end when that comes
   * first.
   */
  resetsAt: string;
  plan: string | null;
  rateCard: string;
  /** How to price a request for free. */
  quote: string;
  /**
   * Where to upgrade. Absent on a custom plan (any plan code but `free`, `trial`, `trial_outreach`,
   * `starter`, `pro` and `business`): it has no self-serve upgrade.
   */
  upgradeUrl?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const error7Schema: Schema<Error7> = s.object<Error7>(
  {
    code: s.defaulted(s.literal("insufficient_tokens"), "insufficient_tokens"),
    message: s.string(),
    requestId: s.string(),
    cost: s.int(),
    remaining: s.int(),
    resetsAt: s.string(),
    plan: s.nullable(s.string()),
    rateCard: s.string(),
    quote: s.string(),
    upgradeUrl: s.optional(s.string()),
    _keysMap: {
      requestId: "request_id",
      resetsAt: "resets_at",
      rateCard: "rate_card",
      upgradeUrl: "upgrade_url",
    },
  },
  { additionalProperties: s.json() },
);
