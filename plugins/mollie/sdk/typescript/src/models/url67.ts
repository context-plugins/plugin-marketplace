import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * The URL your customer should visit to make payment for the invoice. This is where you should
 * redirect the customer to unless the `status` is set to `paid`.
 */
export type Url67 = {
  /** The actual URL string. */
  href: string;
  /** The content type of the page or endpoint the URL points to. */
  type: string;
};

export const url67Schema: Schema<Url67> = s.object<Url67>({
  href: s.string(),
  type: s.string(),
});
