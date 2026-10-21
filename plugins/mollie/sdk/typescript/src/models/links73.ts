import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { urlSchema, type Url } from "./url.js";
import { url1Schema, type Url1 } from "./url1.js";

/**
 * Links to help navigate through the lists of items. Every URL object will contain an `href` and a
 * `type` field.
 */
export type Links73 = {
  /** The URL to the current set of items. */
  self?: Url1;
  /** In v2 endpoints, URLs are commonly represented as objects with an `href` and `type` field. */
  documentation?: Url;
};

export const links73Schema: Schema<Links73> = s.object<Links73>({
  self: s.optional(s.lazy(() => url1Schema)),
  documentation: s.optional(s.lazy(() => urlSchema)),
});
