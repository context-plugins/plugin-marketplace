import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const SignalType = {
  AllSignals: "allSignals",
  Promotion: "promotion",
  CompanyChange: "companyChange",
} as const;
export type SignalType = (typeof SignalType)[keyof typeof SignalType] | (string & {});

export const signalTypeSchema: EnumSchema<SignalType> = s.enumOf<SignalType>(SignalType);
