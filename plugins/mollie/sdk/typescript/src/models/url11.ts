import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * The API resource URL of the [chargebacks](list-payment-chargebacks) that belong to this payment.
 */
export type Url11 = {
  /** The actual URL string. */
  href: string;
  /** The content type of the page or endpoint the URL points to. */
  type: string;
};

export const url11Schema: Schema<Url11> = s.object<Url11>({
  href: s.string(),
  type: s.string(),
});
