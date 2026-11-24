import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type FundingDataRound = {
  announcedOn?: string;
  leadInvestors?: string[];
  currency: string;
  title: string;
  moneyRaised?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const fundingDataRoundSchema: Schema<FundingDataRound> = s.object<FundingDataRound>(
  {
    announcedOn: s.optional(s.string()),
    leadInvestors: s.optional(s.array(s.string())),
    currency: s.string(),
    title: s.string(),
    moneyRaised: s.optional(s.float64()),
  },
  { additionalProperties: s.json() },
);
