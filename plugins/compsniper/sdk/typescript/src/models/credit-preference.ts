import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const CreditPreference = {
  Auto: "auto",
  Credits: "credits",
} as const;
export type CreditPreference = (typeof CreditPreference)[keyof typeof CreditPreference] | (string & {});

export const creditPreferenceSchema: EnumSchema<CreditPreference> =
  s.enumOf<CreditPreference>(CreditPreference);
