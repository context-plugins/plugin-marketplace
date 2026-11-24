import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The variant of the quote block. */
export const QuoteVariant = {
  Block: "block",
  Inline: "inline",
  Quotation: "quotation",
} as const;
export type QuoteVariant = (typeof QuoteVariant)[keyof typeof QuoteVariant] | (string & {});

export const quoteVariantSchema: EnumSchema<QuoteVariant> = s.enumOf<QuoteVariant>(QuoteVariant);
