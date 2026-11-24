import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Frequency = {
  Weekly: "weekly",
  Biweekly: "biweekly",
  Monthly: "monthly",
} as const;
export type Frequency = (typeof Frequency)[keyof typeof Frequency] | (string & {});

export const frequencySchema: EnumSchema<Frequency> = s.enumOf<Frequency>(Frequency);
