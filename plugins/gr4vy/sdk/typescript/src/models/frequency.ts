import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Indicates the frequency unit for the subscription. Allowed values are: `WEEKLY`, `MONTHLY`,
 * `QUARTERLY`, `SEMI_ANNUAL`, `ANNUAL`.
 */
export const Frequency = {
  Weekly: "WEEKLY",
  Monthly: "MONTHLY",
  Quarterly: "QUARTERLY",
  SemiAnnual: "SEMI_ANNUAL",
  Annual: "ANNUAL",
} as const;
export type Frequency = (typeof Frequency)[keyof typeof Frequency] | (string & {});

export const frequencySchema: EnumSchema<Frequency> = s.enumOf<Frequency>(Frequency);
