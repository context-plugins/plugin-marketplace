import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The card aging mode for stories in this Group: "gradual" or "immediate". Null if card aging is
 * off.
 */
export const CardAgingMode1 = {
  Off: "off",
  Gradual: "gradual",
  Immediate: "immediate",
} as const;
export type CardAgingMode1 = (typeof CardAgingMode1)[keyof typeof CardAgingMode1] | (string & {});

export const cardAgingMode1Schema: EnumSchema<CardAgingMode1> = s.enumOf<CardAgingMode1>(CardAgingMode1);
