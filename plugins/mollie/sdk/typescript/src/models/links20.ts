import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { urlSchema, type Url } from "./url.js";
import { url62Schema, type Url62 } from "./url62.js";

/**
 * An object with several relevant URLs. Every URL object will contain an `href` and a `type` field.
 */
export type Links20 = {
  /** In v2 endpoints, URLs are commonly represented as objects with an `href` and `type` field. */
  self?: Url;
  /**
   * The link you can send your customer to, where they can either log in and link their account, or
   * sign up and proceed with onboarding.
   */
  clientLink?: Url62;
  /** In v2 endpoints, URLs are commonly represented as objects with an `href` and `type` field. */
  documentation?: Url;
};

export const links20Schema: Schema<Links20> = s.object<Links20>({
  self: s.optional(s.lazy(() => urlSchema)),
  clientLink: s.optional(s.lazy(() => url62Schema)),
  documentation: s.optional(s.lazy(() => urlSchema)),
});
