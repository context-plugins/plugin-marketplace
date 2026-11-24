import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { fundingDataRoundSchema, type FundingDataRound } from "./funding-data-round.js";

export type FundingData = {
  totalRounds: number;
  totalRoundsAmount?: number;
  currency: string;
  isIpo: boolean;
  lastFundingEventDate?: string;
  lastFundingEventAmount?: number;
  lastFundingEventName?: string;
  rounds?: FundingDataRound[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const fundingDataSchema: Schema<FundingData> = s.object<FundingData>(
  {
    totalRounds: s.float64(),
    totalRoundsAmount: s.optional(s.float64()),
    currency: s.string(),
    isIpo: s.boolean(),
    lastFundingEventDate: s.optional(s.string()),
    lastFundingEventAmount: s.optional(s.float64()),
    lastFundingEventName: s.optional(s.string()),
    rounds: s.optional(s.array(s.lazy(() => fundingDataRoundSchema))),
  },
  { additionalProperties: s.json() },
);
