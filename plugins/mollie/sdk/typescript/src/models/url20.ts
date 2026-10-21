import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * Link to Mollie Checkout page allowing customers to select a different payment method instead of
 * legacy bank transfer.
 */
export type Url20 = {
  /** The actual URL string. */
  href: string;
  /** The content type of the page or endpoint the URL points to. */
  type: string;
};

export const url20Schema: Schema<Url20> = s.object<Url20>({
  href: s.string(),
  type: s.string(),
});
