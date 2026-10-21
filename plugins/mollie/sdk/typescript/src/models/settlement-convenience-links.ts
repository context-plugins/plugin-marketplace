import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { urlSchema, type Url } from "./url.js";

/**
 * An object with several relevant URLs. Every URL object will contain an `href` and a `type` field.
 *
 * This endpoint always points to your organization's current open or next settlement rather than
 * one specific settlement, so it doesn't return links to that settlement's payments, captures,
 * refunds, chargebacks, or invoice.
 */
export type SettlementConvenienceLinks = {
  /** In v2 endpoints, URLs are commonly represented as objects with an `href` and `type` field. */
  self: Url;
  /** In v2 endpoints, URLs are commonly represented as objects with an `href` and `type` field. */
  documentation?: Url;
};

export const settlementConvenienceLinksSchema: Schema<SettlementConvenienceLinks> =
  s.object<SettlementConvenienceLinks>({
    self: urlSchema,
    documentation: s.optional(s.lazy(() => urlSchema)),
  });
