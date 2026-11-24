import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Signal = {
  AllSignals: "allSignals",
  Promotion: "promotion",
  CompanyChange: "companyChange",
} as const;
export type Signal = (typeof Signal)[keyof typeof Signal] | (string & {});

export const signalSchema: EnumSchema<Signal> = s.enumOf<Signal>(Signal);
