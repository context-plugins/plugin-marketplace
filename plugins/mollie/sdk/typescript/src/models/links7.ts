import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { urlNullable6Schema, type UrlNullable6 } from "./url-nullable6.js";
import { urlNullable7Schema, type UrlNullable7 } from "./url-nullable7.js";
import { urlSchema, type Url } from "./url.js";
import { url36Schema, type Url36 } from "./url36.js";

/**
 * An object with several relevant URLs. Every URL object will contain an `href` and a `type` field.
 */
export type Links7 = {
  /** In v2 endpoints, URLs are commonly represented as objects with an `href` and `type` field. */
  self: Url;
  /** The API resource URL of the [payment](get-payment) that this capture belongs to. */
  payment: Url36;
  /**
   * The API resource URL of the [settlement](get-settlement) this capture has been settled with.
   * Not present if not yet settled.
   */
  settlement?: UrlNullable6 | null;
  /**
   * The API resource URL of the [shipment](get-shipment) this capture is associated with. Not
   * present if it isn't associated with a shipment.
   */
  shipment?: UrlNullable7 | null;
  /** In v2 endpoints, URLs are commonly represented as objects with an `href` and `type` field. */
  documentation: Url;
};

export const links7Schema: Schema<Links7> = s.object<Links7>({
  self: urlSchema,
  payment: url36Schema,
  settlement: s.optionalNullable(s.lazy(() => urlNullable6Schema)),
  shipment: s.optionalNullable(s.lazy(() => urlNullable7Schema)),
  documentation: urlSchema,
});
