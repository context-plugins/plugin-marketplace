import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Indicates the old product to use for the convert positions */
export const OldProduct = {
  I: "I",
  D: "D",
  Co: "CO",
  Oco: "OCO",
  Mtf: "MTF",
} as const;
export type OldProduct = (typeof OldProduct)[keyof typeof OldProduct] | (string & {});

export const oldProductSchema: EnumSchema<OldProduct> = s.enumOf<OldProduct>(OldProduct);
