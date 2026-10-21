import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { urlNullable3Schema, type UrlNullable3 } from "./url-nullable3.js";
import { urlSchema, type Url } from "./url.js";
import { url2Schema, type Url2 } from "./url2.js";
import { url3Schema, type Url3 } from "./url3.js";
import { url4Schema, type Url4 } from "./url4.js";
import { url5Schema, type Url5 } from "./url5.js";

/**
 * An object with several relevant URLs. Every URL object will contain an `href` and a `type` field.
 */
export type SettlementLinks = {
  /** In v2 endpoints, URLs are commonly represented as objects with an `href` and `type` field. */
  self: Url;
  /** The API resource URL of the [payments](list-payments) included in this settlement. */
  payments?: Url2;
  /** The API resource URL of the [captures](list-captures) included in this settlement. */
  captures?: Url3;
  /** The API resource URL of the [refunds](list-refunds) deducted from this settlement. */
  refunds?: Url4;
  /** The API resource URL of the [chargebacks](list-chargebacks) deducted from this settlement. */
  chargebacks?: Url5;
  /** The API resource URL of the [invoice](list-invoices). */
  invoice?: UrlNullable3 | null;
  /** In v2 endpoints, URLs are commonly represented as objects with an `href` and `type` field. */
  documentation?: Url;
};

export const settlementLinksSchema: Schema<SettlementLinks> = s.object<SettlementLinks>({
  self: urlSchema,
  payments: s.optional(s.lazy(() => url2Schema)),
  captures: s.optional(s.lazy(() => url3Schema)),
  refunds: s.optional(s.lazy(() => url4Schema)),
  chargebacks: s.optional(s.lazy(() => url5Schema)),
  invoice: s.optionalNullable(s.lazy(() => urlNullable3Schema)),
  documentation: s.optional(s.lazy(() => urlSchema)),
});
