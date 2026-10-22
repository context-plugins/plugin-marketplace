import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { urlSchema, type Url } from "./url.js";

/**
 * An object with several relevant URLs. Every URL object will contain an `href` and a `type` field.
 */
export type Links41 = {
  /** In v2 endpoints, URLs are commonly represented as objects with an `href` and `type` field. */
  self: Url;
  /** In v2 endpoints, URLs are commonly represented as objects with an `href` and `type` field. */
  documentation: Url;
  /** In v2 endpoints, URLs are commonly represented as objects with an `href` and `type` field. */
  payment: Url;
};

export const links41Schema: Schema<Links41> = s.object<Links41>({
  self: urlSchema,
  documentation: urlSchema,
  payment: urlSchema,
});
