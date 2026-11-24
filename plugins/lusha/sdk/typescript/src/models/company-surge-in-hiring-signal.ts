import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type CompanySurgeInHiringSignal = {
  companyId?: string;
  signalId?: string;
  signalDate?: string;
  newJobsPostedLastWeek?: number;
  historicalAvg?: number;
  changeRatePercent?: number;
  companyName?: string;
  domain?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const companySurgeInHiringSignalSchema: Schema<CompanySurgeInHiringSignal> =
  s.object<CompanySurgeInHiringSignal>(
    {
      companyId: s.optional(s.string()),
      signalId: s.optional(s.string()),
      signalDate: s.optional(s.dateOnly()),
      newJobsPostedLastWeek: s.optional(s.float64()),
      historicalAvg: s.optional(s.float64()),
      changeRatePercent: s.optional(s.float64()),
      companyName: s.optional(s.string()),
      domain: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
