import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Subtype1 = {
  Custom: "CUSTOM",
  Website: "WEBSITE",
  App: "APP",
  OfflineConversion: "OFFLINE_CONVERSION",
  Lookalike: "LOOKALIKE",
  Engagement: "ENGAGEMENT",
} as const;
export type Subtype1 = (typeof Subtype1)[keyof typeof Subtype1] | (string & {});

export const subtype1Schema: EnumSchema<Subtype1> = s.enumOf<Subtype1>(Subtype1);
