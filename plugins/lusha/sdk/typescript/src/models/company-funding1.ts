import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { companyFundingRoundSchema, type CompanyFundingRound } from "./company-funding-round.js";

/** Details regarding the company's funding activities. */
export type CompanyFunding1 = {
  rounds?: CompanyFundingRound[];
  totalRounds: number;
  totalRoundsAmount?: number;
  currency: string;
  isIpo: boolean;
  lastRoundType?: string;
  lastRoundAmount?: number;
  lastRoundDate?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const companyFunding1Schema: Schema<CompanyFunding1> = s.object<CompanyFunding1>(
  {
    rounds: s.optional(s.array(s.lazy(() => companyFundingRoundSchema))),
    totalRounds: s.float64(),
    totalRoundsAmount: s.optional(s.float64()),
    currency: s.string(),
    isIpo: s.boolean(),
    lastRoundType: s.optional(s.string()),
    lastRoundAmount: s.optional(s.float64()),
    lastRoundDate: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
