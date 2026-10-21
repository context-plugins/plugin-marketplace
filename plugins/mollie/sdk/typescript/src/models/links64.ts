import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { urlNullable19Schema, type UrlNullable19 } from "./url-nullable19.js";
import { urlNullable20Schema, type UrlNullable20 } from "./url-nullable20.js";
import { urlSchema, type Url } from "./url.js";
import { url81Schema, type Url81 } from "./url81.js";
import { url82Schema, type Url82 } from "./url82.js";

/**
 * An object with several relevant URLs. Every URL object will contain an `href` and a `type` field.
 */
export type Links64 = {
  /** In v2 endpoints, URLs are commonly represented as objects with an `href` and `type` field. */
  self: Url;
  /** The API resource URL of the [customer](get-customer) this subscription was created for. */
  customer: Url81;
  /** The API resource URL of the [mandate](get-mandate) this subscription was created for. */
  mandate?: UrlNullable19 | null;
  /** The API resource URL of the [profile](get-profile) this subscription was created for. */
  profile: Url82;
  /**
   * The API resource URL of the [payments](list-payments) created for this subscription. Omitted if
   * no such payments exist (yet).
   */
  payments?: UrlNullable20 | null;
};

export const links64Schema: Schema<Links64> = s.object<Links64>({
  self: urlSchema,
  customer: url81Schema,
  mandate: s.optionalNullable(s.lazy(() => urlNullable19Schema)),
  profile: url82Schema,
  payments: s.optionalNullable(s.lazy(() => urlNullable20Schema)),
});
