import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { challengeSchema, type Challenge } from "./challenge.js";

export type TrialKey = {
  code: number;
  message?: string;
  /** The credential. Send as X-API-Key. */
  key: string;
  keyPrefix?: string;
  plan?: string;
  tier: string;
  tierLabel?: string;
  expiresAt: Date;
  callsCeiling?: number;
  callsUsed?: number;
  callsRemaining?: number;
  budgetIs?: string;
  maxLimit?: number;
  maxPage?: number | null;
  scope?: string;
  /**
   * Present when the key arrives LOCKED. Until these are answered the key may make only the calls
   * named here.
   */
  challenge?: Challenge;
  /** What is enforced, and what we ask of you. */
  terms?: Record<string, unknown>;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const trialKeySchema: Schema<TrialKey> = s.object<TrialKey>(
  {
    code: s.int(),
    message: s.optional(s.string()),
    key: s.string(),
    keyPrefix: s.optional(s.string()),
    plan: s.optional(s.string()),
    tier: s.string(),
    tierLabel: s.optional(s.string()),
    expiresAt: s.dateTime(),
    callsCeiling: s.optional(s.int()),
    callsUsed: s.optional(s.int()),
    callsRemaining: s.optional(s.int()),
    budgetIs: s.optional(s.string()),
    maxLimit: s.optional(s.int()),
    maxPage: s.optionalNullable(s.int()),
    scope: s.optional(s.string()),
    challenge: s.optional(s.lazy(() => challengeSchema)),
    terms: s.optional(s.record(s.string(), s.unknown())),
    _keysMap: {
      keyPrefix: "key_prefix",
      tierLabel: "tier_label",
      expiresAt: "expires_at",
      callsCeiling: "calls_ceiling",
      callsUsed: "calls_used",
      callsRemaining: "calls_remaining",
      budgetIs: "budget_is",
      maxLimit: "max_limit",
      maxPage: "max_page",
    },
  },
  { additionalProperties: s.json() },
);
