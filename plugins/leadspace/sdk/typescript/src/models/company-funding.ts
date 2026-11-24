import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type CompanyFunding = {
  lastRoundInvestorCount?: number;
  totalRoundsCount?: number;
  lastRoundDate?: string;
  lastRoundMoneyRaised?: string;
  lastRoundType?: string;
  cbUrl?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const companyFundingSchema: Schema<CompanyFunding> = s.object<CompanyFunding>(
  {
    lastRoundInvestorCount: s.optional(s.float64()),
    totalRoundsCount: s.optional(s.float64()),
    lastRoundDate: s.optional(s.string()),
    lastRoundMoneyRaised: s.optional(s.string()),
    lastRoundType: s.optional(s.string()),
    cbUrl: s.optional(s.string()),
    _keysMap: {
      lastRoundInvestorCount: "last_round_investor_count",
      totalRoundsCount: "total_rounds_count",
      lastRoundDate: "last_round_date",
      lastRoundMoneyRaised: "last_round_money_raised",
      lastRoundType: "last_round_type",
      cbUrl: "cb_url",
    },
  },
  { additionalProperties: s.json() },
);
