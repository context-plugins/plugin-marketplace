import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { amount46Schema, type Amount46 } from "./amount46.js";

export type Pricing = {
  /**
   * A description of what the pricing applies to. For example, a specific country (`The
   * Netherlands`) or a category of cards (`American Express`). If a `locale` is provided, the
   * description may be translated.
   */
  description: string;
  /** The fixed price charged per payment. */
  fixed: Amount46;
  /** The variable price charged per payment, as a percentage string. */
  variable: string;
  /**
   * Only present for credit card pricing. It will correspond with the `feeRegion` of credit card
   * payments as returned in the [Payments API](get-payment).
   */
  feeRegion?: string | null;
};

export const pricingSchema: Schema<Pricing> = s.object<Pricing>({
  description: s.string(),
  fixed: amount46Schema,
  variable: s.string(),
  feeRegion: s.optionalNullable(s.string()),
});
