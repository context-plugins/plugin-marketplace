import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { urlSchema, type Url } from "./url.js";
import { url45Schema, type Url45 } from "./url45.js";
import { url46Schema, type Url46 } from "./url46.js";
import { url47Schema, type Url47 } from "./url47.js";
import { url48Schema, type Url48 } from "./url48.js";
import { url49Schema, type Url49 } from "./url49.js";
import { url50Schema, type Url50 } from "./url50.js";

/**
 * An object with several relevant URLs. Every URL object will contain an `href` and a `type` field.
 */
export type Links15 = {
  /** In v2 endpoints, URLs are commonly represented as objects with an `href` and `type` field. */
  self?: Url;
  /** Link to the profile in the Mollie dashboard. */
  dashboard?: Url45;
  /** The API resource URL of the chargebacks that belong to this profile. */
  chargebacks?: Url46;
  /** The API resource URL of the methods that are enabled for this profile. */
  methods?: Url47;
  /** The API resource URL of the payments that belong to this profile. */
  payments?: Url48;
  /** The API resource URL of the refunds that belong to this profile. */
  refunds?: Url49;
  /** The hosted checkout preview URL. You need to be logged in to access this page. */
  checkoutPreviewUrl?: Url50;
  /** In v2 endpoints, URLs are commonly represented as objects with an `href` and `type` field. */
  documentation?: Url;
};

export const links15Schema: Schema<Links15> = s.object<Links15>({
  self: s.optional(s.lazy(() => urlSchema)),
  dashboard: s.optional(s.lazy(() => url45Schema)),
  chargebacks: s.optional(s.lazy(() => url46Schema)),
  methods: s.optional(s.lazy(() => url47Schema)),
  payments: s.optional(s.lazy(() => url48Schema)),
  refunds: s.optional(s.lazy(() => url49Schema)),
  checkoutPreviewUrl: s.optional(s.lazy(() => url50Schema)),
  documentation: s.optional(s.lazy(() => urlSchema)),
});
