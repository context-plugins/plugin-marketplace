import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { urlSchema, type Url } from "./url.js";
import { url44Schema, type Url44 } from "./url44.js";

/**
 * An object with several relevant URLs. Every URL object will contain an `href` and a `type` field.
 */
export type Links14 = {
  /** In v2 endpoints, URLs are commonly represented as objects with an `href` and `type` field. */
  self?: Url;
  /** Direct link to the organization's Mollie dashboard. */
  dashboard?: Url44;
  /** In v2 endpoints, URLs are commonly represented as objects with an `href` and `type` field. */
  documentation?: Url;
};

export const links14Schema: Schema<Links14> = s.object<Links14>({
  self: s.optional(s.lazy(() => urlSchema)),
  dashboard: s.optional(s.lazy(() => url44Schema)),
  documentation: s.optional(s.lazy(() => urlSchema)),
});
