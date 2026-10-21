import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { urlSchema, type Url } from "./url.js";

/**
 * An object with several relevant URLs. Every URL object will contain an `href` and a `type` field.
 */
export type Links48 = {
  /** In v2 endpoints, URLs are commonly represented as objects with an `href` and `type` field. */
  self?: Url;
};

export const links48Schema: Schema<Links48> = s.object<Links48>({
  self: s.optional(s.lazy(() => urlSchema)),
});
