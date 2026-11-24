import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type CompanyHeadcountChangeSignal = {
  companyId?: string;
  signalId?: string;
  signalDate?: string;
  baselineEmployeesCount?: number;
  newEmployeesCount?: number;
  changeRatePercent?: number;
  companyName?: string;
  domain?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const companyHeadcountChangeSignalSchema: Schema<CompanyHeadcountChangeSignal> =
  s.object<CompanyHeadcountChangeSignal>(
    {
      companyId: s.optional(s.string()),
      signalId: s.optional(s.string()),
      signalDate: s.optional(s.dateOnly()),
      baselineEmployeesCount: s.optional(s.float64()),
      newEmployeesCount: s.optional(s.float64()),
      changeRatePercent: s.optional(s.float64()),
      companyName: s.optional(s.string()),
      domain: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
