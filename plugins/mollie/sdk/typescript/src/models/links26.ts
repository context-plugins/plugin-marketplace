import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { urlSchema, type Url } from "./url.js";
import { url67Schema, type Url67 } from "./url67.js";
import { url68Schema, type Url68 } from "./url68.js";

/**
 * An object with several relevant URLs. Every URL object will contain an `href` and a `type` field.
 */
export type Links26 = {
  /** In v2 endpoints, URLs are commonly represented as objects with an `href` and `type` field. */
  self?: Url;
  /**
   * The URL your customer should visit to make payment for the invoice. This is where you should
   * redirect the customer to unless the `status` is set to `paid`.
   */
  invoicePayment?: Url67;
  /** The URL the invoice is available at, if generated. */
  pdfLink?: Url68;
  /** In v2 endpoints, URLs are commonly represented as objects with an `href` and `type` field. */
  documentation?: Url;
  /** In v2 endpoints, URLs are commonly represented as objects with an `href` and `type` field. */
  next?: Url;
  /** In v2 endpoints, URLs are commonly represented as objects with an `href` and `type` field. */
  previous?: Url;
};

export const links26Schema: Schema<Links26> = s.object<Links26>({
  self: s.optional(s.lazy(() => urlSchema)),
  invoicePayment: s.optional(s.lazy(() => url67Schema)),
  pdfLink: s.optional(s.lazy(() => url68Schema)),
  documentation: s.optional(s.lazy(() => urlSchema)),
  next: s.optional(s.lazy(() => urlSchema)),
  previous: s.optional(s.lazy(() => urlSchema)),
});
