import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { urlNullable10Schema, type UrlNullable10 } from "./url-nullable10.js";
import { urlSchema, type Url } from "./url.js";
import { url38Schema, type Url38 } from "./url38.js";

/**
 * An object with several relevant URLs. Every URL object will contain an `href` and a `type` field.
 */
export type Links51 = {
  /** In v2 endpoints, URLs are commonly represented as objects with an `href` and `type` field. */
  self: Url;
  /** The API resource URL of the [payment](get-payment) that this refund belongs to. */
  payment: Url38;
  /**
   * The API resource URL of the [settlement](get-settlement) this refund has been settled with. Not
   * present if not yet settled.
   */
  settlement?: UrlNullable10 | null;
};

export const links51Schema: Schema<Links51> = s.object<Links51>({
  self: urlSchema,
  payment: url38Schema,
  settlement: s.optionalNullable(s.lazy(() => urlNullable10Schema)),
});
