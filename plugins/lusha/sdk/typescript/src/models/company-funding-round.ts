import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type CompanyFundingRound = {
  currency: string;
  roundAmount: number;
  roundType: string;
  roundDate: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const companyFundingRoundSchema: Schema<CompanyFundingRound> = s.object<CompanyFundingRound>(
  {
    currency: s.string(),
    roundAmount: s.float64(),
    roundType: s.string(),
    roundDate: s.string(),
  },
  { additionalProperties: s.json() },
);
