import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type CompanySurgeInHiringByLocationSignal = {
  signalId?: string;
  companyId?: string;
  country?: string;
  state?: string;
  signalDate?: string;
  newJobsPostedLast4Weeks?: number;
  historicalAvg?: number;
  changeRatePercent?: number;
  companyName?: string;
  domain?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const companySurgeInHiringByLocationSignalSchema: Schema<CompanySurgeInHiringByLocationSignal> =
  s.object<CompanySurgeInHiringByLocationSignal>(
    {
      signalId: s.optional(s.string()),
      companyId: s.optional(s.string()),
      country: s.optional(s.string()),
      state: s.optional(s.string()),
      signalDate: s.optional(s.dateOnly()),
      newJobsPostedLast4Weeks: s.optional(s.float64()),
      historicalAvg: s.optional(s.float64()),
      changeRatePercent: s.optional(s.float64()),
      companyName: s.optional(s.string()),
      domain: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
