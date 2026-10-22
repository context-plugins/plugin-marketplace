import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { urlSchema, type Url } from "./url.js";
import { url121Schema, type Url121 } from "./url121.js";

/**
 * An object with several relevant URLs. Every URL object will contain an `href` and a `type` field.
 */
export type Links68 = {
  /** In v2 endpoints, URLs are commonly represented as objects with an `href` and `type` field. */
  self?: Url;
  /**
   * The URL that can be used to have new organizations sign up and be automatically linked to this
   * partner. Will be omitted if the partner is not of type `signuplink`.
   */
  signuplink?: Url121;
  /** In v2 endpoints, URLs are commonly represented as objects with an `href` and `type` field. */
  documentation?: Url;
};

export const links68Schema: Schema<Links68> = s.object<Links68>({
  self: s.optional(s.lazy(() => urlSchema)),
  signuplink: s.optional(s.lazy(() => url121Schema)),
  documentation: s.optional(s.lazy(() => urlSchema)),
});
