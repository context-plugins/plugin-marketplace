import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type FundingRound = {
  type?: string;
  amount?: number;
  date?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const fundingRoundSchema: Schema<FundingRound> = s.object<FundingRound>(
  {
    type: s.optional(s.string()),
    amount: s.optional(s.float64()),
    date: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
