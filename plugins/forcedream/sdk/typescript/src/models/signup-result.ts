import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type SignupResult = {
  apiKey?: string;
  userId?: string;
  liveKey?: string;
  trialBalancePence?: number;
  trialBalanceGbp?: string;
  referralCode?: string;
  message?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const signupResultSchema: Schema<SignupResult> = s.object<SignupResult>(
  {
    apiKey: s.optional(s.string()),
    userId: s.optional(s.string()),
    liveKey: s.optional(s.string()),
    trialBalancePence: s.optional(s.int()),
    trialBalanceGbp: s.optional(s.string()),
    referralCode: s.optional(s.string()),
    message: s.optional(s.string()),
    _keysMap: {
      apiKey: "api_key",
      userId: "user_id",
      liveKey: "live_key",
      trialBalancePence: "trial_balance_pence",
      trialBalanceGbp: "trial_balance_gbp",
      referralCode: "referral_code",
    },
  },
  { additionalProperties: s.json() },
);
