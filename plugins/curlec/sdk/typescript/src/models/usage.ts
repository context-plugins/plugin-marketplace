import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * single_use: auto-closes after first successful payment (requires fixed_amount=true).
 * multiple_use: stays open for multiple payments.
 */
export const Usage = {
  SingleUse: "single_use",
  MultipleUse: "multiple_use",
} as const;
export type Usage = (typeof Usage)[keyof typeof Usage] | (string & {});

export const usageSchema: EnumSchema<Usage> = s.enumOf<Usage>(Usage);
