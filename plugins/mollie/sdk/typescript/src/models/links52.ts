import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { urlNullable12Schema, type UrlNullable12 } from "./url-nullable12.js";
import { urlSchema, type Url } from "./url.js";
import { url40Schema, type Url40 } from "./url40.js";

/**
 * An object with several relevant URLs. Every URL object will contain an `href` and a `type` field.
 */
export type Links52 = {
  /** In v2 endpoints, URLs are commonly represented as objects with an `href` and `type` field. */
  self: Url;
  /** The API resource URL of the [payment](get-payment) that this chargeback belongs to. */
  payment: Url40;
  /**
   * The API resource URL of the [settlement](get-settlement) this chargeback has been settled with.
   * Not present if not yet settled.
   */
  settlement?: UrlNullable12 | null;
};

export const links52Schema: Schema<Links52> = s.object<Links52>({
  self: urlSchema,
  payment: url40Schema,
  settlement: s.optionalNullable(s.lazy(() => urlNullable12Schema)),
});
