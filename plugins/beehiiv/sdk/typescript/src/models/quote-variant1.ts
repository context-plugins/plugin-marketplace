import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The type of quote block. Defaults to "block". */
export const QuoteVariant1 = {
  Block: "block",
  Inline: "inline",
  Quotation: "quotation",
} as const;
export type QuoteVariant1 = (typeof QuoteVariant1)[keyof typeof QuoteVariant1] | (string & {});

export const quoteVariant1Schema: EnumSchema<QuoteVariant1> = s.enumOf<QuoteVariant1>(QuoteVariant1);
