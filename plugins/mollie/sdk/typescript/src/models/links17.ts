import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { urlSchema, type Url } from "./url.js";
import { url57Schema, type Url57 } from "./url57.js";
import { url58Schema, type Url58 } from "./url58.js";

/**
 * An object with several relevant URLs. Every URL object will contain an `href` and a `type` field.
 */
export type Links17 = {
  /** In v2 endpoints, URLs are commonly represented as objects with an `href` and `type` field. */
  self?: Url;
  /**
   * Direct link to the onboarding process in the Mollie dashboard. The merchant can be redirected
   * to this page to complete their onboarding.
   */
  dashboard?: Url57;
  /** The API resource URL of the organization. */
  organization?: Url58;
  /** In v2 endpoints, URLs are commonly represented as objects with an `href` and `type` field. */
  documentation?: Url;
};

export const links17Schema: Schema<Links17> = s.object<Links17>({
  self: s.optional(s.lazy(() => urlSchema)),
  dashboard: s.optional(s.lazy(() => url57Schema)),
  organization: s.optional(s.lazy(() => url58Schema)),
  documentation: s.optional(s.lazy(() => urlSchema)),
});
