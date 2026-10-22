import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Usage = {
  Configure: "CONFIGURE",
  Both: "BOTH",
} as const;
export type Usage = (typeof Usage)[keyof typeof Usage] | (string & {});

export const usageSchema: EnumSchema<Usage> = s.enumOf<Usage>(Usage);
