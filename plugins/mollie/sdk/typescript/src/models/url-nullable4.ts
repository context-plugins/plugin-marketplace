import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * For test mode payments in certain scenarios, a hosted interface is available to help you test
 * different payment states.
 *
 * Firstly, for recurring test mode payments. Recurring payments do not have a checkout URL, because
 * these payments are executed without any user interaction.
 *
 * Secondly, for paid test mode payments. The payment state screen will then allow you to create a
 * refund or chargeback for the test payment.
 */
export type UrlNullable4 = {
  /** The actual URL string. */
  href?: string;
  /** The content type of the page or endpoint the URL points to. */
  type?: string;
};

export const urlNullable4Schema: Schema<UrlNullable4> = s.object<UrlNullable4>({
  href: s.optional(s.string()),
  type: s.optional(s.string()),
});
